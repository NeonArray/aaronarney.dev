import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Archive from "../archive";
import Layout from "../layout";
import Header from "./Header";
import Aside from "./Aside";
import List from "./List";
import { capitalizeWords } from "../../utils";

interface IProps {
    readonly data: any;
    readonly pageContext: any;
}

export default function Template({
                                     data,
                                     pageContext,
                                 }: IProps): ReactComponentElement<any> {
    const { edges } = data.allMarkdownRemark;

    return (
        <Layout location={data.location}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Aside data={pageContext} />

                <main data-grid-area="main">
                    <article className="post">
                        <Helmet
                            title={`${capitalizeWords(
                                pageContext.category
                            )} | Aaron Arney`}
                            bodyAttributes={{
                                class: "archive-category",
                            }}
                        />

                        <List />

                        <Header data={pageContext} />

                        <Archive posts={edges} layout="stack" />
                    </article>
                </main>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query PostByCategory($category: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { in: [$category] } } }
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
    }
`;
