import React from 'react';
import PostBlock from '../post-block';


export default function Archive({ centered, posts, layout }) {
    const centerMargin = centered ? { margin: '0 auto' } : null;

    // flex flex-col justify-center mt-8 max-w-max px-5 md:content-start md:flex-row md:flex-wrap md:justify-between
    return (
        <div style={centerMargin} className="
            grid
            grid-cols-1
            md:grid-cols-2
            row-gap-20
            gap-12
            px-12
            md:px-6
            lg:px-0
            max-w-screen-lg
            mx-auto
        ">
            {posts.map((post, iterator) => {
                return (
                    <PostBlock key={iterator} meta={post.node} layout={layout} />
                );
            })}
        </div>
    );
}

// Archive.propTypes = {
//     centered: PropTypes.bool,
//     posts: PropTypes.array.isRequired,
//     layout: PropTypes.string,
// };
