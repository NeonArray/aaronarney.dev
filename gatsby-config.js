module.exports = {
    siteMetadata: {
        siteUrl: "https://www.aaronarney.dev",
        title: "Aaron Arney",
        defaultTitle: "Aaron Arney",
        titleTemplate: "%s · A development blog",
        description: "A development blog, brought to you by Aaron Arney.",
        url: "https://www.aaronarney.dev",
        image: "/icons/favicon.ico",
        twitterUsername: "@ocularrhythm",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/uploads`,
                name: "uploads",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/posts`,
                name: "pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_self'
                        }
                    },
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-netlify",
            options: {
                headers: {
                    "/*": [
                        "Content-Security-Policy-Report-Only: default-src https: 'unsafe-inline' 'unsafe-eval'",
                        "Referrer-Policy: no-referrer",
                        'Feature-Policy: vibrate "none"; geolocation "none"; midi "none"; notifications "none"; push "none"; sync-xhr "none"; microphone "none"; camera "none"; magnetometer "none"; gyroscope "none"; speaker "none"; fullscreen "none"; payment "none";',
                    ],
                },
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "aaron-arney",
                short_name: "aaronarney",
                start_url: "/",
                background_color: "#6CC9D2",
                theme_color: "#6CC9D2",
                display: "minimal-ui",
                icon: "static/icons/icon.png",
            },
        },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
    ],
};
