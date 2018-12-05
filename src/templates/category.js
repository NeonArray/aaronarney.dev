import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';

import Archive from '../components/archive';
import Layout from '../components/layout';
import CategoryHeader from '../components/category-header';
import CategoryAside from '../components/category-aside';
import CategoryList from '../components/category-list';

export default function Template({ data, pageContext }) {
    const { edges } = data.allMarkdownRemark;

    return (
        <Layout location={data.location}>
            <CategoryAside data={ pageContext } />

            <main data-grid-area="main">
                <article className="post">
                    <Helmet title={`Your Blog Name`} bodyAttributes={{
                        class: 'archive-category'
                    }} />

                    <CategoryList />

                    <CategoryHeader data={ pageContext } />

                    <Archive posts={ edges } layout="stack" />
                </article>
            </main>
        </Layout>
    );
}


export const pageQuery = graphql`
    query PostByCategory($category: String!) {
        allMarkdownRemark(
            limit: 2000, 
            sort: { fields: [frontmatter___date], order: DESC }, 
            filter: { frontmatter: { category: { in: [$category] }}} 
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        category
                    }
                }
            }
        }
    }`;
