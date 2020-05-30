import * as React from "react";
import { Link } from "gatsby";
import { ReactComponentElement } from "react";

export default function PageFooter(): ReactComponentElement<any> {
    return (
        <div
            data-grid-area="page-footer"
            className="bg-grey-lighter px-2 py-4 text-center"
        >
            <Link className="text-black ml-4" to="/sitemap.xml">
                Sitemap
            </Link>
        </div>
    );
}
