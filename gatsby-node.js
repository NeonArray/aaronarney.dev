const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const {createNodeField} = actions;

    if (node.internal.type === "MarkdownRemark") {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: "slug",
            node,
            value,
        });
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/components/post/index.tsx");
    const blogCategoryTemplate = path.resolve("src/components/category/index.tsx");

    const result = await graphql(`
        {
            posts: allMarkdownRemark(
                filter: { frontmatter: { type: { ne: "work" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            category
                            title
                        }
                    }
                }
            }
            work: allMarkdownRemark(
                filter: {frontmatter: {type: {eq: "work"}}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            category
                            title
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw `GraphQL threw an error in gatsby-node`;
    }

    const generatePages = (arr) => {
        arr.forEach(({ node }, index) => {

            if (node.frontmatter === null || node.frontmatter.path === null) {
                throw `Post ${index} missing path in frontmatter`;
            }

            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    prev: index === 0 ? null : arr[index - 1].node,
                    next: index === arr.length - 1 ? null : arr[index + 1].node,
                },
            });
        });
    }

    const posts = result.data.posts.edges;
    generatePages(posts);
    generatePages(result.data.work.edges);

    let categories = [];
    posts.forEach((edge) => {
        categories.push(edge.node.frontmatter.category);
    });

    // Create unique set of categories
    categories = [...new Set(categories)];

    categories.forEach((category) => {
        createPage({
            path: `blog/category/${category}`,
            component: blogCategoryTemplate,
            context: {
                category,
            },
        });
    });
};
