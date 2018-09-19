import React from 'react';

import PostBlock from '../post-block';

import './archive.css';

const Archive = ({ posts }) => {
    return (
        <div className="posts">
            { posts.map((i, c) => {
                return (
                    <PostBlock key={ c } meta={ i.node }/>
                );
            })}
        </div>
    );
};

export default Archive;
