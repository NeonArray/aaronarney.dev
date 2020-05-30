import * as React from "react";
import { ReactComponentElement } from "react";

interface IProps {
    readonly message: string;
}

export default function Callout({
    message,
}: IProps): ReactComponentElement<any> {
    return (
        <div className="md:max-w-copy post-copy block text-white bg-pink shadow-callout font-bold my-8 mx-auto max-w-max p-5 uppercase">
            {message}
        </div>
    );
}
