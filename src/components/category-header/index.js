import React from "react";
import { assign } from '../../utils';

import style from './category-header.module.css';

const CategoryHeader = ({ data }) => {
    return (
        <div className={ assign(style.title, style[ data.category.toLowerCase() ]) }>
            <h1 className={ style.heading }>
                { data.category }
                <br />
                <span className={ style.subtext }>Articles</span>
            </h1>
        </div>
    );
};

export default CategoryHeader;
