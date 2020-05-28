import React from 'react'
import { Link } from 'gatsby';

import logo from '../../images/ocular-rhythm-logo.svg';


export default function Header() {
    return (
        <header data-grid-area="header" className="block w-screen border-2 border-grey-light">
            <div className="my-0 mx-auto max-w-max py-4 px-3 md:px-5">

                <ul className="list-reset flex flex-row items-center" role="navigation">
                    <li className="flex-1">
                        <Link to="/" title="Go home">
                            <img src={logo} alt="Ocular Rhythm" height="28" width="186" />
                        </Link>
                    </li>

                    <li className="border-b-2 border-transparent m-r-3 hover:border-b-2 hover:border-red ml-5">
                        <Link className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy" to="/blog">Blog</Link>
                    </li>

                    <li className="border-b-2 border-transparent m-r-3 hover:border-b-2 hover:border-red ml-5">
                        <Link className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy" to="/guest-posts">Guest Posts</Link>
                    </li>

                    <li className="border-b-2 border-transparent m-r-3 hover:border-b-2 hover:border-red ml-5">
                        <Link className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy" to="/uses">Uses</Link>
                    </li>

                    <li className="border-b-2 border-transparent m-r-3 hover:border-b-2 hover:border-red ml-5">
                        <Link className="focus:text-gray-dark text-gray-dark font-bold no-underline hover:text-red md:leading-flappy" to="/fun-stuff">Fun Stuff</Link>
                    </li>

                    <li className="ml-5">
                        <a href="https://github.com/ocularrhythm" target="_blank" rel="noopener noreferrer nofollow" title="Github Profile - opens in new window">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
