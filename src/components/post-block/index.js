import React from 'react';
import { assign } from '../../utils';

import PostTitle from '../post-title';

import style from './post-block.module.css';

const PostBlock = ({ meta, layout }) => {
    return (
        <article className={ assign(style.block, style[layout]) }>
           <PostTitle
               category={ meta.frontmatter.category }
               title={ meta.frontmatter.title }
               date={ meta.frontmatter.date }
               path={ meta.frontmatter.path }
           />
        </article>
    );
};

export default PostBlock;
