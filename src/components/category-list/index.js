import React from 'react';
import { Link } from 'gatsby';
import { assign } from '../../utils';

import helpers from '../../global/helpers.module.css';
import style from './category-list.module.css';
import CategoryImage from "../category-image";


export default function CategoryList() {
    return (
        <div className={ helpers.showForMobile }>
            <div className={ style.blocks }>
                <p className="section-label">Categories</p>

                <ul className={ assign(style.categories, helpers.listInline) }>
                    <li>
                        <Link to="blog/category/vr">
                            <CategoryImage height={ 50 } width={ 50 } category="vr" cssClass={ style.image } />
                            VR
                        </Link>
                    </li>
                    <li>
                        <Link to="blog/category/software">
                            <CategoryImage height={ 50 } width={ 50 } category="software" cssClass={ style.image } />
                            Software
                        </Link>
                    </li>
                    <li>
                        <Link to="blog/category/web">
                            <CategoryImage height={ 50 } width={ 50 } category="web" cssClass={ style.image } />
                            Web
                        </Link>
                    </li>
                    <li>
                        <Link to="blog/category/general">
                            <CategoryImage height={ 50 } width={ 50 } category="general" cssClass={ style.image } />
                            General
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
