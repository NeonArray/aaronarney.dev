import React from "react";
import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { graphql } from 'gatsby';

import Archive from '../components/archive';
import Layout from '../components/layout';
import CategoryHeader from '../components/category-header';
import CategoryAside from '../components/category-aside';
import CategoryList from '../components/category-list';
import { capitalizeWords } from '../utils';


export default function Template({ data, pageContext }) {
    const { edges } = data.allMarkdownRemark;

    return (
        <Layout location={data.location}>
            <CategoryAside data={pageContext} />

            <main data-grid-area="main">
                <article className="post">
                    <Helmet
                        title={`${capitalizeWords(pageContext.category)} Posts`}
                        bodyAttributes={{
                            class: 'archive-category'
                        }} />

                    <CategoryList />

                    <CategoryHeader data={pageContext} />

                    <Archive posts={edges} layout="stack" />
                </article>
            </main>
        </Layout>
    );
}

Template.propTypes = {
    data: PropTypes.shape({
        location: PropTypes.string,
        markdownremark: PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string,
            date: PropTypes.string.isRequired,
            tags: PropTypes.array,
        }),
    }),
    pageContext: PropTypes.object.isRequired,
};

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
                        date(formatString: "YYYY-MM-DD")
                        path
                        category
                    }
                }
            }
        }
    }`;
