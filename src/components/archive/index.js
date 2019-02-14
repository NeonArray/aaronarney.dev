import React from 'react';
import PropTypes from 'prop-types';
import PostBlock from '../post-block';


export default function Archive({ centered, posts, layout }) {
    const centerMargin = centered ? { margin: '0 auto' } : null;

    return (
        <div style={centerMargin} className="flex flex-col justify-center max-w-max px-5 md:content-start md:flex-row md:flex-wrap md:justify-between">
            {posts.map((i, c) => {
                return (
                    <PostBlock key={c} meta={i.node} layout={layout} />
                );
            })}
        </div>
    );
}

Archive.propTypes = {
    centered: PropTypes.bool,
    posts: PropTypes.array.isRequired,
    layout: PropTypes.string,
};
