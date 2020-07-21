module.exports = {
    siteMetadata: {
        siteUrl: `https://www.aaronarney.dev`,
        title: `Aaron Arney`,
        defaultTitle: `Aaron Arney`,
        titleTemplate: `%s · A development blog`,
        description: `A development blog, brought to you by Aaron Arney.`,
        url: `https://www.aaronarney.dev`,
        image: `/icons/favicon.ico`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                  {
                    site {
                      siteMetadata {
                        title
                        description
                        siteUrl
                        site_url: siteUrl
                      }
                    }
                  }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                })
                            })
                        },
                        query: `
                        {
                            allMarkdownRemark(
                                filter: { frontmatter: { type: { ne: "work" } } }
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                edges {
                                    node {
                                        excerpt
                                        html
                                        fields { slug }
                                        frontmatter {
                                            title
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    `,
                        output: "/rss.xml",
                        title: "Aaron Arney's RSS Feed",
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/work`,
                name: `work`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: `language-`,
                            inlineCodeMarker: null,
                            aliases: {},
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
                            // as we assume you'll use gatsby-remark-images to handle
                            // images in markdown as it automatically creates responsive
                            // versions of images.
                            //
                            // If you'd like to not use gatsby-remark-images and just copy your
                            // original images to the public directory, set
                            // `ignoreFileExtensions` to an empty array.
                            ignoreFileExtensions: [],
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*': [
                        'Referrer-Policy: no-referrer',
                        'Feature-Policy: vibrate `none`; geolocation `none`; midi `none`; notifications `none`; push `none`; sync-xhr `none`; microphone `none`; camera `none`; magnetometer `none`; gyroscope `none`; speaker `none`; fullscreen `none`; payment `none`;'
                    ]
                },
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `aaron-arney`,
                short_name: `aaronarney`,
                start_url: `/`,
                background_color: `#6CC9D2`,
                theme_color: `#6CC9D2`,
                display: `minimal-ui`,
                icon: `static/icons/icon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
    ],
};
