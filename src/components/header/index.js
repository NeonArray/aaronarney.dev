import React from 'react'
import { Link } from 'gatsby';

import logo from '../../images/ocular-rhythm-logo.svg';
import github from '../../images/github.svg';


export default function Header() {
    return (
        <header data-grid-area="header" className="block w-screen border-2 border-grey-light">
            <div className="my-0 mx-auto max-w-max pt-3 px-3 md:py-0 md:px-5">

                <ul className="list-reset flex flex-row items-center" role="navigation">
                    <li className="flex-1">
                        <Link to="/" title="Go home">
                            <img src={logo} alt="Ocular Rhythm Logo of a red sphere and teal sphere" height="28" width="186" />
                        </Link>
                    </li>

                    <li className="border-b-2 border-transparent m-r-3 hover:border-b-2 hover:border-or-red ml-5">
                        <Link className="text-gray-dark font-bold no-underline hover:text-or-red md:leading-flappy" to="/blog">Blog</Link>
                    </li>

                    <li className="ml-5">
                        <a href="https://github.com/ocularrhythm" target="_blank" rel="noopener noreferrer nofollow" title="Github Profile - opens in new window">
                            <img className="social-icon" src={github} alt="Github Profile" height="18" width="35" />
                        </a>
                    </li>
                </ul>

            </div>
        </header>
    );
}
