import React from "react";
import { Link } from 'gatsby';

import style from './category-aside.module.css';
import tag from '../../global/tags.module.css';
import help from '../../global/helpers.module.css';
import CategoryImage from '../category-image';

const CategoryAside = ({ data }) => {
    return (
        <aside data-grid-area="aside" className={ style.aside }>
            <div className="flex align-right flex-columns">
                <CategoryImage height={ 164 } width={ 164 } category={ data.category } className={ style.img } />

                <div className={ help.hideForMobile }>
                    <p className={ style.title }>View By Category:</p>

                    <ul className={ style.categories }>
                        <li><Link className={ tag.software } to="blog/category/software">Software</Link></li>
                        <li><Link className={ tag.web } to="blog/category/web">Web</Link></li>
                        <li><Link className={ tag.general } to="blog/category/general">General</Link></li>
                        <li><Link className={ tag.vr } to="blog/category/vr">VR</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default CategoryAside;
