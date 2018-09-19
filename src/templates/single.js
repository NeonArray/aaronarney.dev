import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';

import Layout from '../components/layout';



export default ({ data, pageContext }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <article className="post">
                <Helmet title={`Your Blog Name - ${ post.frontmatter.title }`} bodyAttributes={{
                    class: 'page-post'
                }} />
            </article>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                category
            }
        }
    }`;
