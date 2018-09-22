import React from 'react';
import { Link } from 'gatsby';

import style from  './post-footer.module.css';

const PostFooter = ({ links }) => {
    const { next, prev } = links;

    return (
        <div data-grid-area="footer" className={ style.nav }>
            <Link to={ prev !== null ? prev.frontmatter.path : '' } className={ style.previous }>
                <div className={ style.copy }>
                    <span className={ style.direction }>
                        Previous Post
                    </span>
                    { prev !== null ? prev.frontmatter.title : 'No More Posts' }
                </div>
            </Link>

            <Link to={ next !== null ? next.frontmatter.path : '' } className={ style.next }>
                <div className={ style.copy }>
                    <span className={ style.direction }>
                        Next Post
                    </span>
                    { next !== null ? next.frontmatter.title : 'No More Posts' }
                </div>
            </Link>
        </div>
    );
};

export default PostFooter;
