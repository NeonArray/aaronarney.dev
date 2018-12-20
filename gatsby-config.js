module.exports = {
    siteMetadata: {
        title: 'Ocular-Rhythm',
        defaultTitle: 'Ocular-Rhythm',
        titleTemplate: '%s · A development blog',
        description:
            'Ocular-Rhythm is a development blog, brought to you by Aaron Arney.',
        url: 'https://www.ocular-rhythm.io',
        image: '/icons/favicon.ico',
        twitterUsername: '@agarney',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    '/*': [
                        'Content-Security-Policy: default-src \'none\'; script-src \'self\' \'unsafe-inline\'; connect-src \'self\'; img-src \'none\'; style-src \'self\' \'unsafe-inline\';',
                        'Referrer-Policy: no-referrer',
                        'Feature-Policy: vibrate "none"; geolocation "none"; midi "none"; notifications "none"; push "none"; sync-xhr "none"; microphone "none"; camera "none"; magnetometer "none"; gyroscope "none"; speaker "none"; fullscreen "none"; payment "none";'
                    ]
                }
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links'
                    }
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'ocular-rhythm',
                short_name: 'ocularrhythm',
                start_url: '/',
                background_color: '#6CC9D2',
                theme_color: '#6CC9D2',
                display: 'minimal-ui',
                icon: 'static/icons/icon.png',
            },
        },
        'gatsby-plugin-offline',
    ],
};
