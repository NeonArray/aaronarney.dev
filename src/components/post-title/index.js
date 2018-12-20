import React from 'react';
import { Link } from 'gatsby';
import { assign } from '../../utils';

import style from './post-title.module.css';
import tag from '../../global/tags.module.css';


export default ({ category, title, date, path }) => {
    return (
        <>
            <div>
                <Link className={ assign(tag[category.toLowerCase() ], tag.cat) } to={ `blog/category/${category}` }>
                    { category }
                </Link>
            </div>
            <div className={ style.title }>
                <Link className={ style.link } to={ path || '' }>
                    { title }
                </Link>
            </div>
            <time className={ style.date }>
                { date }
            </time>
        </>
    );
};
