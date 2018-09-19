import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark;
    console.log(post);
    return (
        <Layout>
            <article className="post" style={{ marginTop: '75px' }}>
                <Helmet title={`Your Blog Name`} bodyAttributes={{
                    class: 'archive-category'
                }} />

            </article>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($category: String!) {
        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
        edges {
            node {
                frontmatter {
                    title
                    path
                    date(formatString: "MMMM DD, YYYY")
                    category
                }
            }
        }
    }
    }`;
