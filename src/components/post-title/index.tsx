import * as React from "react";
import { Link } from "gatsby";
import * as moment from "moment";
import { ReactComponentElement } from "react";

interface IProps {
    readonly category: string;
    readonly date: string;
    readonly path?: string;
    readonly title: string;
    readonly isLink?: boolean;
    readonly isH1?: boolean;
}

function createHeader(
    isH1: boolean,
    headerContent: ReactComponentElement<any>
): ReactComponentElement<any> {
    if (isH1) {
        return (
            <h1
                className="text-black font-bold m-0 relative z-50 text-2xl md:text-4xl"
                itemProp="headline"
            >
                {headerContent}
            </h1>
        );
    }

    return (
        <h2
            className="text-black font-bold m-0 relative z-50 text-2xl md:text-4xl"
            itemProp="headline"
        >
            {headerContent}
        </h2>
    );
}

export default function PostTitle({
    category,
    title,
    date,
    path,
    isLink,
    isH1 = true,
}: IProps) {
    let headerContent = <>{title}</>;

    if (isLink && path.startsWith("http")) {
        headerContent = <a href={path}>{title}</a>;
    } else if (isLink) {
        headerContent = (
            <Link className="text-black no-underline" to={path || ""}>
                {title}
            </Link>
        );
    }

    return (
        <>
            <div>
                <span className={`${category.toLowerCase()} label tag-cat`}>
                    {category}
                </span>
            </div>

            {createHeader(isH1, headerContent)}

            <time
                className="pt-2 mt-4 max-w-xs text-base text-grey-darker border-t-1 border-grey-light"
                itemProp="datePublished"
                dateTime={moment(date).toISOString()}
            >
                {moment(date).format("MMMM DD, YYYY")}
            </time>
        </>
    );
}
