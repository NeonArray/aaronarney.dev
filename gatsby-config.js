module.exports = {
    siteMetadata: {
        siteUrl: "https://www.ocular-rhythm.io",
        title: "Ocular-Rhythm",
        defaultTitle: "Ocular-Rhythm",
        titleTemplate: "%s · A development blog",
        description:
            "Ocular-Rhythm is a development blog, brought to you by Aaron Arney.",
        url: "https://www.ocular-rhythm.io",
        image: "/icons/favicon.ico",
        twitterUsername: "@agarney",
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
                name: "ocular-rhythm",
                short_name: "ocularrhythm",
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
