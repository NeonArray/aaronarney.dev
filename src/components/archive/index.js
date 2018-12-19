import React from 'react';
import PostBlock from '../post-block';
import style from './archive.module.css';


export default ({ centered, posts, layout }) => {
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
};

