import * as React from "react";
import PostTitle from "../post-title";
import CategoryImage from "../Category/category-image";
import { ReactComponentElement } from "react";

interface IProps {
    readonly content: {
        readonly category: string;
        readonly date: string;
        readonly path: string;
        readonly tags: Array<string>;
        readonly title: string;
    };
}

export default function PostHeader({
    content,
}: IProps): ReactComponentElement<any> {
    return (
        <header className="header flex flex-col md:flex-row mt-0 mx-auto mb-10 pt-6 pr-4 pb-10 pl-4">
            <div className="w-full md:w-1/2 self-end mb-4 text-center">
                <CategoryImage
                    height={300}
                    width={300}
                    category={content.category}
                    cssClass="header-image"
                />
            </div>
            <div className="w-full md:w-1/2 self-center">
                <PostTitle
                    category={content.category}
                    title={content.title}
                    date={content.date}
                    path={content.path}
                    isLink={false}
                />
            </div>
        </header>
    );
}
