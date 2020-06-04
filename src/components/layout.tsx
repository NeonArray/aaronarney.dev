import * as React from "react";
import { ReactChildren, ReactComponentElement } from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Page/header";
import Footer from "./Page/footer";
import "../styles/style.css";

interface IProps {
    readonly location?: string;
    readonly children: any;
}

export default function Layout({
    children,
}: IProps): ReactComponentElement<any> {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            defaultTitle: title
                            titleTemplate: titleTemplate
                            defaultDescription: description
                            siteUrl: url
                            defaultImage: image
                        }
                    }
                }
            `}
            render={(data) => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        titleTemplate={data.site.siteMetadata.titleTemplate}
                    >
                        <html
                            lang="en"
                            itemScope
                            itemType="https://schema.org/Blog"
                        />

                        <link rel="author" href="Aaron Arney" />

                        <meta
                            name="msvalidate.01"
                            content="1B785495556C9DE837E22313FC8A33E7"
                        />
                        <meta 
                            name="google-site-verification"
                            content="qSYTR-fUhJ4J-fZqzPWk3S88l1Ls8HQX9-DU_j7JxDA"
                        />
                        
                        <meta name="robots" content="index,follow" />
                        <meta name="googlebot" content="index,follow" />
                        <meta name="twitter:dnt" content="on" />
                    </Helmet>

                    <div className="grid">
                        <Header />

                        {children}

                        <Footer />
                    </div>
                </>
            )}
        />
    );
}
