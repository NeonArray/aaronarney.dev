import * as React from "react";
import { ReactComponentElement } from "react";

import PostTitle from "../post-title";

interface IProps {
    readonly meta: {
        readonly frontmatter: {
            readonly category: string;
            readonly title: string;
            readonly date: string;
            readonly path: string;
        };
    };
    readonly layout?: string;
}

export default function PostBlock({
    meta,
    layout,
}: IProps): ReactComponentElement<any> {
    let layoutClass: string = "";

    if (layout === "stack") {
        layoutClass = "md:w-full";
    }

    return (
        <article className={`${layoutClass}`}>
            <PostTitle
                category={meta.frontmatter.category}
                title={meta.frontmatter.title}
                date={meta.frontmatter.date}
                path={meta.frontmatter.path}
                isLink={true}
                isH1={false}
            />
        </article>
    );
}
