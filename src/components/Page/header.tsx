import * as React from "react";
import { ReactComponentElement } from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "gatsby";
// @ts-ignore
import * as logo from "../../images/ocular-rhythm-logo.svg";


export default function Header(): ReactComponentElement<any> {
    function showSettings() {

    }

    return (
        <header className="flex flex-row">
            <div className="my-0 mx-auto max-w-max py-4 px-3 md:px-5">
                <Menu pageWrapId={ "page-wrap" }
                      outerContainerId={ "outer-container" }
                      right
                      noOverlay
                      width={400}
                >
                    <Link
                        className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy"
                        to="/blog"
                    >
                        Blog
                    </Link>

                    <Link
                        className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy"
                        to="/guest-posts"
                    >
                        Guest Posts
                    </Link>

                    <Link
                        className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy"
                        to="/uses"
                    >
                        Uses
                    </Link>

                    <Link
                        className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy"
                        to="/fun-stuff"
                    >
                        Fun Stuff
                    </Link>

                    <a
                        href="https://github.com/ocularrhythm"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="Github Profile - opens in new window"
                    >
                        Github
                    </a>
                </Menu>

                <Link to="/" title="Go home">
                    <img
                        src={logo}
                        alt="Ocular Rhythm"
                        height="28"
                        width="186"
                    />
                </Link>
            </div>
        </header>
    );
}
