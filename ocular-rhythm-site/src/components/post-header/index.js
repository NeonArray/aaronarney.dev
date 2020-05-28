import React from 'react'
import PropTypes from 'prop-types'
import PostTitle from '../post-title'
import CategoryImage from '../category-image'

export default function PostHeader({ content }) {
    return (
        <header className="header flex flex-col md:flex-row mt-0 mx-auto mb-10 pt-6 pr-4 pb-10 pl-4">
            <div className="w-full md:w-1/2 self-end mb-4 text-center">
                <CategoryImage
                    height={300}
                    width={300}
                    category={content.category}
                    cssClass="header-image"
                />
            </div>
            <div className="w-full md:w-1/2 self-center">
                <PostTitle
                    category={content.category}
                    title={content.title}
                    date={content.date}
                    path={content.path}
                    isLink={false}
                />

                {content.tags !== null ? (
                    <div className="flex mt-4">
                        <ul
                            itemProp="keywords"
                            className="flex flex-wrap list-reset md:justify-between"
                        >
                            <li>Tags:&nbsp;</li>

                            {content.tags &&
                                content.tags.map((tag, i) => {
                                    return (
                                        <li
                                            className="bg-white text-xs py-0 px-4 capitalize border-1 border-grey-light mr-2 self-center"
                                            key={i}
                                        >
                                            {tag}
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    )
}

PostHeader.propTypes = {
    content: PropTypes.shape({
        category: PropTypes.string,
        date: PropTypes.string.isRequired,
        path: PropTypes.string,
        tags: PropTypes.array,
        title: PropTypes.string.isRequired,
    }),
}
