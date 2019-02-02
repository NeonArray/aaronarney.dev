import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { assign } from '../../utils';
import moment from 'moment';

import style from './post-title.module.css';
import tag from '../../global/tags.module.css';


export default function PostTitle({ category, title, date, path }) {
    return (
        <>
            <div>
                <Link className={assign(tag[category.toLowerCase()], tag.cat)} to={`blog/category/${category}`}>
                    {category}
                </Link>
            </div>
            <div className={style.title}>
                <Link className={style.link} to={path || ''}>
                    {title}
                </Link>
            </div>
            <time className={style.date}>
                {moment(date).format('MMMM DD, YYYY')}
            </time>
        </>
    );
}

PostTitle.propTypes = {
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
};
