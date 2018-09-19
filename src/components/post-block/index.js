import React from 'react';
import { Link } from 'gatsby';

import style from './post-block.module.css';

const PostBlock = ({ meta }) => {
    const cssClass = `color__${meta.frontmatter.category.toLowerCase()}`;

    return (
        <article className={ style.block }>
            <div className={`${style.category} ${cssClass}`}>
                { meta.frontmatter.category }
            </div>
            <div className={ style.title }>
                <Link className={ style.link } to={ meta.frontmatter.path }>
                    { meta.frontmatter.title }
                </Link>
            </div>
            <time className={ style.date }>
                { meta.frontmatter.date }
            </time>
        </article>
    );
};

export default PostBlock;
