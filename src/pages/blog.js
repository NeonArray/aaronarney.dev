import React from 'react'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Archive from '../components/archive/index';
import Layout from '../components/layout';


export default ({ data }) => {
    const { allMarkdownRemark: edges } = data;

    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'archive'
                }} />
                <Archive centered={ true } posts={ edges.edges } />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
