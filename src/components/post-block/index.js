import React from 'react';
import PropTypes from 'prop-types';

import PostTitle from '../post-title';


export default function PostBlock({ meta, layout }) {
    let layoutClass = '';

    if (layout === 'stack') {
        layoutClass = 'md:w-full';
    }

    return (
        <article className={`mb-10 w-full md:w-2/5 ${layoutClass}`}>
            <PostTitle
                category={meta.frontmatter.category}
                title={meta.frontmatter.title}
                date={meta.frontmatter.date}
                path={meta.frontmatter.path}
                isLink={true}
                isH1={false}
            />
        </article>
    );
}

PostBlock.propTypes = {
    meta: PropTypes.object.isRequired,
    layout: PropTypes.string,
};
