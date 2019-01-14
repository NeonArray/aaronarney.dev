import React from 'react';
import PropTypes from 'prop-types';
import { assign } from '../../utils';

import PostTitle from '../post-title';

import style from './post-block.module.css';


export default function PostBlock({ meta, layout }) {
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
}

PostBlock.propTypes = {
    meta: PropTypes.object.isRequired,
    layout: PropTypes.string,
};
