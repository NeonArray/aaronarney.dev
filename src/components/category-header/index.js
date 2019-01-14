import React from "react";
import PropTypes from 'prop-types';
import { assign } from '../../utils';

import style from './category-header.module.css';


export default function CategoryHeader({ data }) {
    return (
        <div className={ assign(style.title, style[ data.category.toLowerCase() ]) }>
            <h1 className={ style.heading }>
                { data.category }
                <br />
                <span className={ style.subtext }>Articles</span>
            </h1>
        </div>
    );
}

CategoryHeader.propTypes = {
    data: PropTypes.object.isRequired,
};
