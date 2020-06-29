import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

// @ts-ignore
import * as photo from "../images/aaron-with-quiet-cropped.jpg";
import {graphql} from "gatsby";
import Archive from "../components/archive";

export default function Work({ data }): ReactComponentElement<any> {
    const { allMarkdownRemark: edges } = data;

    return (
        <Layout>
            <main style={{ marginTop: "75px" }}>
                <Helmet
                    title="Work | Aaron Arney"
                    bodyAttributes={{
                        class: "page-post",
                    }}
                />

                <div className="stack max-w-screen-lg mx-auto">
                    <h1 className="mb-20 block">Work</h1>
                </div>

                <Archive centered={true} posts={edges.edges} />
            </main>
        </Layout>
    );
}


export const pageQuery = graphql`
    query WorkQuery {
        allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "work"}}}
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
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
    }
`;

