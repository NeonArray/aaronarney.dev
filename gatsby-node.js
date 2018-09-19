const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve('src/templates/single.js');
    const blogCategoryTemplate = path.resolve('src/templates/category.js');

    return new Promise((resolve, reject) => {
        graphql(
            `{
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            category
                        }
                    }
                }
            }
        }`).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }

            const posts = result.data.allMarkdownRemark.edges;

            // Using a leading "/" will generate a different page than one without. I'm just going to ensure these
            // always format with a leading slash since that seems to be what Gatsby is expecting.
            const pathRegex = new RegExp('/(^\/)/', 'g');

            result.data.allMarkdownRemark.edges
                .forEach(({ node }, index) => {
                    const normalizedPath = pathRegex.test(node.frontmatter.path) ? node.frontmatter.path : `/${node.frontmatter.path}`;

                    createPage({
                        path: normalizedPath,
                        component: blogPostTemplate,
                        context: {
                            prev: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index + 1].node,
                        }
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

            resolve();
        });
    });
};
