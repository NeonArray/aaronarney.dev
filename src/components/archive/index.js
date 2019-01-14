import React from 'react';
import PropTypes from 'prop-types';
import PostBlock from '../post-block';
import style from './archive.module.css';


export default function Archive({ centered, posts, layout }) {
    const centerMargin = centered ? { margin: '0 auto' } : null;

    return (
        <div style={ centerMargin } className={ style.posts }>
            { posts.map((i, c) => {
                return (
                    <PostBlock key={ c } meta={ i.node } layout={ layout } />
                );
            })}
        </div>
    );
}

Archive.propTypes = {
   centered: PropTypes.bool,
   posts: PropTypes.object.isRequired,
   layout: PropTypes.string,
};
