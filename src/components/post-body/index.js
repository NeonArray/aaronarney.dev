import React from 'react';

import style from './post-body.module.css';
import 'prismjs/themes/prism-okaidia.css';


export default ({ content }) => {
    let html = `<div class="${ style.copy }">`;
    // eslint-disable-next-line
    const REGEXP = new RegExp('<div class="gatsby-highlight" data-language="([a-z]*)?">(\t|\r|\n|.)*?<\/div>', 'g');

    // THE COPY BUTTON - TODO: Fix this please, Aaron
    // html += content.html.replace(REGEXP,
    //     `</div><div class="${ style.block }"><div class="${ style.heading }">` +
    //     `<p class="${ style.language }">$1</p><button data-button="copy" class="${ style.copyButton }">Copy</button></div>` +
    //     `<div class="${ style.wrapper } gatsby-highlight">$&</div></div><div class="${ style.copy }">`
    // );

    html += content.html.replace(REGEXP,
        `</div><div class="${ style.block }"><div class="${ style.heading }">` +
        `<p class="${ style.language }">$1</p></div>` +
        `<div class="${ style.wrapper } gatsby-highlight">$&</div></div><div class="${ style.copy }">`
    );

    return (
        <div className={ style.post } dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    );
};
