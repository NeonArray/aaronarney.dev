import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import CategoryImage from '../category-image'

export default function CategoryAside({ data }) {
    return (
        <aside data-grid-area="aside" className="text-right">
            <div className="flex align-right items-end flex-col">
                <CategoryImage
                    height={164}
                    width={164}
                    category={data.category}
                    cssClass="block my-0 mx-auto md:m-0"
                />

                <div className="sm:invisible md:visible">
                    <p className="my-6 text-base leading-tight">
                        View By Category:
                    </p>

                    <ul className="list-reset">
                        <li className="mb-3">
                            <Link
                                className="label software"
                                to="blog/category/software"
                            >
                                Software
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link className="label web" to="blog/category/web">
                                Web
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="label general"
                                to="blog/category/general"
                            >
                                General
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

CategoryAside.propTypes = {
    data: PropTypes.object.isRequired,
}
