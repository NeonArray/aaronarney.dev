import * as React from "react";
import { Link } from "gatsby";
import { ReactComponentElement } from "react";

export default function PageFooter(): ReactComponentElement<any> {
    return (
        <div
            data-grid-area="page-footer"
            className="bg-dark-blue px-2 py-4 text-center text-white"
        >
            &copy; {new Date().getFullYear()} Aaron Arney.
        </div>
    );
}
