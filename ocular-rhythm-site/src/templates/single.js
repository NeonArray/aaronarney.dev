import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';

import Layout from '../components/layout';
import Callout from '../components/callout';
import PostHeader from '../components/post-header';
import PostBody from '../components/post-body';
import PostFooter from '../components/post-footer';

function shouldShowCallout(date) {
    const currentDate = moment();
    const postDate = moment(date);

    if (currentDate.diff(postDate, 'months') >= 6) {
        return (<Callout message={`Heads up! This article was published over ${currentDate.diff(postDate, 'months')} months ago.`} />);
    }

    return undefined;
}

export default function Template({ data, pageContext }) {
    const post = data.markdownRemark;
    const { frontmatter } = post;
    const callout = shouldShowCallout(frontmatter.date);

    return (
        <Layout location={data.location}>
            <Helmet title={frontmatter.title} bodyAttributes={{
                class: 'page-post'
            }} />

            <main className="main" data-grid-area="main" itemScope itemType="https://schema.org/Article">
                <article className="post">

                    <PostHeader content={frontmatter} />

                    {callout}

                    <PostBody content={post} />

                    <PostFooter links={pageContext} />
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
    query BlogPostBySlug($path: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                category
                tags
            }
        }
    }`;
