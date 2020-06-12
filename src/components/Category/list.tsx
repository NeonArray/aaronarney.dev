import * as React from "react";
import { Link } from "gatsby";
import { ReactComponentElement } from "react";
import Image from "./Image";

export default function List(): ReactComponentElement<any> {
    return (
        <div className="sm:block md:hidden">
            <div className="block px-5 md:hidden">
                <p className="text-center mb-3">Categories</p>

                <ul className="list-reset flex flex-row justify-around mb-6 text-center">
                    <li>
                        <Link
                            to="blog/category/software"
                            className="no-underline text-xs"
                        >
                            <Image
                                height={50}
                                width={50}
                                category="software"
                                cssClass="block h-12 mb-1 w-auto"
                            />
                            Software
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="blog/category/web"
                            className="no-underline text-xs"
                        >
                            <Image
                                height={50}
                                width={50}
                                category="web"
                                cssClass="block h-12 mb-1 w-auto"
                            />
                            Web
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="blog/category/general"
                            className="no-underline text-xs"
                        >
                            <Image
                                height={50}
                                width={50}
                                category="general"
                                cssClass="block h-12 mb-1 w-auto"
                            />
                            General
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
