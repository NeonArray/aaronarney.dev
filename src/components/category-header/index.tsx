import * as React from "react";
import { ReactComponentElement } from "react";

interface IProps {
    readonly data: {
        readonly category: string;
    };
}

export default function CategoryHeader({
    data,
}: IProps): ReactComponentElement<any> {
    return (
        <div
            style={{ left: "-15px" }}
            className={`inline-block mb-6 pt-1 px-4 pb-6 relative ${data.category.toLowerCase()}`}
        >
            <h1 className="text-4xl font-bold leading-none mb-0">
                {data.category}
                <br />
                <span
                    className="absolute block font-normal"
                    style={{ bottom: "-12px" }}
                >
                    Articles
                </span>
            </h1>
        </div>
    );
}
