import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { assign } from '../../utils';
import moment from 'moment';

import style from './post-title.module.css';
import tag from '../../global/tags.module.css';

function createHeader(isH1, headerContent) {

    if (isH1) {
        return (
            <h1 className={style.title} itemProp="headline">
                {headerContent}
            </h1>
        );
    }

    return (
        <h2 className={style.title} itemProp="headline">
            {headerContent}
        </h2>
    );
}

export default function PostTitle({ category, title, date, path, isLink, isH1 = true }) {
    const headerContent = isLink ? (
        <Link className={style.link} to={path || ''} >
            {title}
        </Link >
    ) : (title);

    return (
        <>
            <div>
                <Link className={assign(tag[category.toLowerCase()], tag.cat)} to={`blog/category/${category}`}>
                    {category}
                </Link>
            </div>

            {createHeader(isH1, headerContent)}

            <time className={style.date} itemProp="datePublished" dateTime={moment(date).toISOString()}>
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
    isLink: PropTypes.bool,
    isH1: PropTypes.bool,
};
