import * as React from "react";
import { ReactComponentElement } from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "gatsby";

// @ts-ignore
import * as logo from "../../images/AA-logo.svg";

export default function Header(): ReactComponentElement<any> {
    const linkClassName = "focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy";

    return (
        <header className="flex flex-row">
            <div className="my-0 mx-auto max-w-max py-4 px-3 md:px-5">
                <Menu
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                    right
                    noOverlay
                    width={400}
                >
                    <Link
                        className={linkClassName}
                        to="/blog"
                    >
                        Blog
                    </Link>

                    <Link
                        className={linkClassName}
                        to="/guest-posts"
                    >
                        Guest Posts
                    </Link>

                    <Link
                        className={linkClassName}
                        to="/work">
                        Work
                    </Link>

                    <Link
                        className={linkClassName}
                        to="/uses"
                    >
                        Uses
                    </Link>

                    <Link
                        className={linkClassName}
                        to="/fun-stuff"
                    >
                        Fun Stuff
                    </Link>

                    <Link
                        className={linkClassName}
                        to="/reading"
                    >
                        Reading
                    </Link>

                    <hr style={{ margin: '2rem 0', borderColor: "#222831"}}/>

                    <a
                        href="https://github.com/ocularrhythm"
                        title="Github Profile - opens in new window"
                    >
                        Github
                    </a>
                    <a
                        href="https://codepen.io/aaronarney"
                        title="CodePen Profile - opens in new window"
                    >
                        CodePen
                    </a>
                </Menu>

                <Link to="/" title="Go home">
                    <img
                        src={logo}
                        alt="Aaron Arney"
                        height="28"
                        width="186"
                    />
                </Link>
            </div>
        </header>
    );
}
