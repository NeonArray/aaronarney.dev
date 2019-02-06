import React from 'react'
import { Link } from 'gatsby';

import style from './header.module.css';

import logo from '../../images/ocular-rhythm-logo.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import codepen from '../../images/codepen.svg';


export default function Header() {
    return (
        <header data-grid-area="header" className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <Link to="/" title="Go home">
                        <img src={logo} alt="Ocular Rhythm Logo of a red sphere and teal sphere" height="28" width="186" />
                    </Link>
                </div>
                <nav className={style.navigation}>
                    <ul className={style.nav} role="navigation">
                        <li className={style.navItem}>
                            <Link className={style.link} to="/blog">Blog</Link>
                        </li>
                    </ul>
                    <ul className={style.socialLinks}>
                        <li className={style.socialLink}>
                            <a href="https://twitter.com/agarney" target="_blank" rel="noopener noreferrer nofollow" title="Twitter Please Dont Judge Me - opens in new window">
                                <img src={twitter} alt="Twitter Profile Dont Judge Me Please" height="18" />
                            </a>
                        </li>
                        <li className={style.socialLink}>
                            <a href="https://codepen.io/AArney" target="_blank" rel="noopener noreferrer nofollow" title="Codepen Profile - opens in new window">
                                <img src={codepen} alt="Codepen Profile" height="18" />
                            </a>
                        </li>
                        <li className={style.socialLink}>
                            <a href="https://github.com/ocularrhythm" target="_blank" rel="noopener noreferrer nofollow" title="Github Profile - opens in new window">
                                <img src={github} alt="Github Profile" height="18" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
