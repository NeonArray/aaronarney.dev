import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

import style from './header.module.css';

import logo from '../../images/ocular-rhythm-logo.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import codepen from '../../images/codepen.svg';


export default function Header({ siteTitle }) {
    return (
        <header data-grid-area="header" className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <Link to="/" title="Go home">
                        <img src={logo} alt={siteTitle} height="28.62" width="186.37"/>
                    </Link>
                </div>
                <nav className={style.navigation}>
                    <ul className={style.nav} role="navigation">
                        <li className={style.navItem}>
                            <Link className={style.link} to="/blog">Blog</Link>
                        </li>
                        {/*<li className={ style.navItem }>*/}
                        {/*<Link className={ style.link } to="/projects">Projects</Link>*/}
                        {/*</li>*/}
                    </ul>
                    <ul className={style.socialLinks}>
                        <li className={style.socialLink}>
                            <a href="https://twitter.com/agarney" target="_blank" rel="noopener noreferrer nofollow" title="Twitter Please Dont Judge Me">
                                <img src={twitter} alt="Twitter Profile Dont Judge Me Please" height="18"/>
                            </a>
                        </li>
                        <li className={style.socialLink}>
                            <a href="https://codepen.io/AArney" target="_blank" rel="noopener noreferrer nofollow" title="Codepen Profile">
                                <img src={codepen} alt="Codepen Profile" height="18"/>
                            </a>
                        </li>
                        <li className={style.socialLink}>
                            <a href="https://github.com/ocularrhythm" target="_blank" rel="noopener noreferrer nofollow" title="Github Profile">
                                <img src={github} alt="Github Profile" height="18"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};
