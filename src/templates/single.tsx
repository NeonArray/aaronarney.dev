import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import * as moment from "moment";

import Layout from "../components/layout";
import Callout from "../components/callout";
import PostHeader from "../components/post-header";
import PostBody from "../components/post-body";
import PostFooter from "../components/post-footer";

interface IProps {
    readonly pageContext: any;
    readonly data: {
        readonly location: string;
        readonly markdownRemark: {
            readonly content: {
                readonly html: string;
            };
            readonly frontmatter: {
                readonly category: string;
                readonly date: string;
                readonly path: string;
                readonly tags: Array<string>;
                readonly title: string;
            };
        };
    };
}

function shouldShowCallout(date: string): ReactComponentElement<any> {
    const currentDate: moment.Moment = moment();
    const postDate: moment.Moment = moment(date);

    const maximumMonthsOld: number = 6;

    if (currentDate.diff(postDate, "months") >= maximumMonthsOld) {
        return (
            <Callout
                message={`Heads up! This article was published over ${currentDate.diff(
                    postDate,
                    "months"
                )} months ago.`}
            />
        );
    }

    return undefined;
}

export default function Template({
    data,
    pageContext,
}: IProps): ReactComponentElement<any> {
    const post = data.markdownRemark;
    const { frontmatter } = post;
    const callout = shouldShowCallout(frontmatter.date);

    return (
        <Layout location={data.location}>
            <Helmet
                title={`${frontmatter.title} | Ocular-Rhythm`}
                bodyAttributes={{
                    class: "page-post",
                }}
            />

            <main
                className="main"
                data-grid-area="main"
                itemScope
                itemType="https://schema.org/Article"
            >
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
    }
`;
