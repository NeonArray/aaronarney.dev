import React from 'react';

import style from './post-body.module.css';
import 'prismjs/themes/prism-okaidia.css';

const PostBody = ({ content }) => {
    let cleanedhtml = `<div class="${ style.copy }">`;
    const REGEXP = new RegExp('<div class="gatsby-highlight" data-language="([a-z]*)?">(\t|\r|\n|.)*?<\/div>', 'g');

    cleanedhtml += content.html.replace(REGEXP,
        `</div><div class="${ style.block }"><div class="${ style.heading }">` +
        `<p class="${ style.language }">$1</p><button class="${ style.copyButton } js-copy-btn">Copy</button></div>` +
        `<div class="${ style.wrapper } gatsby-highlight">$&</div></div><div class="${ style.copy }">`
    );

    return (
        <div className={ style.post } dangerouslySetInnerHTML={{ __html: cleanedhtml }}>

        </div>
    );
};

export default PostBody;
