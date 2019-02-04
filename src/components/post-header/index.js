import React from 'react';
import PropTypes from 'prop-types';
import PostTitle from "../post-title";
import CategoryImage from "../category-image";

import style from './post-header.module.css';


export default function PostHeader({ content }) {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <CategoryImage height={300} width={300} category={content.category} cssClass={style.image} />
            </div>
            <div className={style.right}>
                <PostTitle
                    category={content.category}
                    title={content.title}
                    date={content.date}
                    path={content.path}
                    isLink={false}
                />

                {content.tags !== null ? (
                    <div className={style.tags}>
                        <ul itemProp="keywords">
                            <li>Tags:&nbsp;</li>
                            {content.tags && content.tags.map((tag, i) => {
                                return (
                                    <li className={style.tag} key={i}>{tag}</li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    );
}

PostHeader.propTypes = {
    content: PropTypes.shape({
        category: PropTypes.string,
        date: PropTypes.string.isRequired,
        path: PropTypes.string,
        tags: PropTypes.array,
        title: PropTypes.string.isRequired,
    }),
};
