const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(`src/templates/single.js`);

    return new Promise((resolve, reject) => {
        resolve(graphql(`{ allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            } }`).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                const posts = result.data.allMarkdownRemark.edges;

                result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: blogPostTemplate,
                        context: {
                            prev: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index + 1].node,
                        },
                    });
                });
            })
        );
    });
};

