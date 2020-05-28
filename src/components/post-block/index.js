import React from 'react';

import PostTitle from '../post-title';


export default function PostBlock({ meta, layout }) {
    let layoutClass = '';

    if (layout === 'stack') {
        layoutClass = 'md:w-full';
    }

    return (
        <article className={`${layoutClass}`}>
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

// PostBlock.propTypes = {
//     meta: PropTypes.object.isRequired,
//     layout: PropTypes.string,
// };
