import * as React from "react";
import { ReactComponentElement } from "react";
import { Link } from "gatsby";

interface IProps {
    readonly links: {
        readonly next: {
            readonly frontmatter: {
                readonly path: string;
                readonly title: string;
            };
        };
        readonly prev: {
            readonly frontmatter: {
                readonly path: string;
                readonly title: string;
            };
        };
    };
}

export default function Footer({
    links,
}: IProps): ReactComponentElement<any> {
    const { next, prev } = links;

    return (
        <div
            data-grid-area="footer"
            className="post-nav flex flex-col font-4 mt-12 relative w-screen md:flex-row"
        >
            <Link
                to={prev !== null ? prev.frontmatter.path : ""}
                className="paginate secondary-grad text-white text-right"
            >
                <div
                    className="truncate relative font-bold text-xl"
                    style={{ textOverflow: "hidden" }}
                >
                    <span className="font-hairline block text-xs">
                        Previous Post
                    </span>
                    {prev !== null ? prev.frontmatter.title : "No More Posts"}
                </div>
            </Link>

            <Link
                to={next !== null ? next.frontmatter.path : ""}
                className="paginate primary-grad text-black text-left"
            >
                <div className="truncate relative font-bold text-xl">
                    <span className="font-hairline block text-xs">
                        Next Post
                    </span>
                    {next !== null ? next.frontmatter.title : "No More Posts"}
                </div>
            </Link>
        </div>
    );
}
