const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

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

    const blogPostTemplate = path.resolve("src/templates/single.tsx");
    const blogCategoryTemplate = path.resolve("src/templates/category.tsx");

    const result = await graphql(`
        {
            allMarkdownRemark(
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
        throw `GraphQL threw an error in gatsy-node`;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {

        if (node.frontmatter === null || node.frontmatter.path === null) {
            throw `Post ${index} missing path in frontmatter`;
        }

        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
        });
    });

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
