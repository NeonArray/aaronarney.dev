import React from 'react';
import { Link } from 'gatsby';

import style from './page-footer.module.css';


export default function PageFooter() {
    return (
        <div data-grid-area="page-footer" className={style.footer}>
            <Link to="/privacy-policy">
                Privacy Policy
            </Link>
            <Link to="/sitemap.xml">
                Sitemap
            </Link>
        </div>
    );
}
