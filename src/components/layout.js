import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../global/style.css';

export default function Layout({ children }) {
    return (
        <StaticQuery
            query={graphql`query SiteTitleQuery { site { siteMetadata {
                defaultTitle: title
                titleTemplate: titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
              } } }` }
            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        titleTemplate={data.site.siteMetadata.titleTemplate}
                    >
                        <html lang="en" />
                        <meta name="msvalidate.01" content="1B785495556C9DE837E22313FC8A33E7" />
                    </Helmet>
                    <Header />
                    <div className="grid">
                        {children}
                    </div>
                </>
            )}
        />
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
