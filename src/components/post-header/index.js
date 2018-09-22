import React from 'react';

import style from './post-header.module.css';

import vr from '../../images/vr.svg';
import code from '../../images/code.svg';
import general from '../../images/general.svg';
import software from '../../images/software.svg';
import web from '../../images/web.svg';

const img = {
    vr, code, general, software, web,
};

const PostHeader = ({ content }) => {
    const category = 'post-category color__' + content.category;

    return (
        <header className={ style.header }>
            <div className={ style.left }>
                <img alt="Man wearing a virtual reality headset" src={ img[content.category.toLowerCase()] } height="300" width="300" className={ style.image } />
            </div>
            <div className={ style.right }>
                <div className={ category }>
                    { content.category }
                </div>
                <h1 className="post-title">
                    <span className="post-title--link">
                        { content.title }
                    </span>
                </h1>
                <div className="post-date">
                    { content.date }
                </div>
            </div>
        </header>
    );
};

export default PostHeader;
