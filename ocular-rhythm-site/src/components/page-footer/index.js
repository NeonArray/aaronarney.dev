import React from 'react'
import { Link } from 'gatsby'

export default function PageFooter() {
    return (
        <div
            data-grid-area="page-footer"
            className="bg-grey-lighter px-2 py-4 text-center"
        >
            <Link className="text-black ml-4" to="/sitemap.xml">
                Sitemap
            </Link>
        </div>
    )
}
