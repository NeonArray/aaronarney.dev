import * as React from "react";
import PostBlock from "../post-block";
import { ReactComponentElement } from "react";

interface IProps {
    readonly posts: Array<any>;
    readonly centered?: boolean;
    readonly layout?: string;
}

export default function Archive({
    centered,
    posts,
    layout,
}: IProps): ReactComponentElement<any> {
    const centerMargin: { margin: string } = centered
        ? { margin: "0 auto" }
        : null;

    return (
        <div
            style={centerMargin}
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            row-gap-20
            gap-12
            px-12
            md:px-6
            lg:px-0
            max-w-screen-lg
            mx-auto
        "
        >
            {posts.map(
                (post, iterator): ReactComponentElement<any> => {
                    return (
                        <PostBlock
                            key={iterator}
                            meta={post.node}
                            layout={layout}
                        />
                    );
                }
            )}
        </div>
    );
}
