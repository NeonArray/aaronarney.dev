import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Archive from "../components/Archive";
import Layout from "../components/layout";

interface IProps {
    readonly data: {
        readonly allMarkdownRemark: {
            readonly edges: Array<{
                readonly node: string;
                readonly frontmatter: {
                    readonly title: string;
                    readonly date: string;
                    readonly path: string;
                    readonly category: string;
                };
            }>;
        };
    };
}

export default function Blog({ data }: IProps): ReactComponentElement<any> {
    const { allMarkdownRemark: edges } = data;

    return (
        <Layout>
            <div style={{ marginTop: "75px" }}>
                <Helmet
                    title="Blog | Ocular-Rhythm"
                    bodyAttributes={{
                        class: "archive",
                    }}
                />
                <Archive centered={true} posts={edges.edges} />
            </div>
        </Layout>
    );
}

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
    }
`;
