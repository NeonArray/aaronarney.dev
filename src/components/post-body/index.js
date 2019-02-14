import React from 'react';
import PropTypes from 'prop-types';

import 'prismjs/themes/prism-okaidia.css';


export default function PostBody({ content }) {
    /**
     * ==== :: What's Happening Here? :: ==========
     * This jumble of a mess came about from spending hours trying to figure out how I can dynamically inject my markdown content, whilst maintaining
     * the syntax highlighting blocks that are used by Prism. The only solution I could come up with was to messily replace and concatenate the content
     * into HTML elements. Then place those "dangerously" into the React component.
     *
     * Alas, this route is not ideal and it also introduces a roadblock that prevents my "Copy" code button from functioning. I may have to extract
     * all of this out into it's own plugin at some point and find a more robust and elegant solution.
     */
    let html = `<div class="text-xl font-light p-3 md:p-0 md:max-w-max post-copy">`;
    // eslint-disable-next-line
    const MATCH_CODE_BLOCKS = new RegExp('<div class="gatsby-highlight" data-language="([a-z]*)?">(\t|\r|\n|.)*?<\/div>', 'g');

    // THE COPY BUTTON - TODO: Fix this please, Aaron
    // html += content.html.replace(REGEXP,
    //     `</div><div class="${ style.block }"><div class="${ style.heading }">` +
    //     `<p class="${ style.language }">$1</p><button data-button="copy" class="${ style.copyButton }">Copy</button></div>` +
    //     `<div class="${ style.wrapper } gatsby-highlight">$&</div></div><div class="${ style.copy }">`
    // );

    const contentContainsMarkup = MATCH_CODE_BLOCKS.test(html);

    html += content.html.replace(MATCH_CODE_BLOCKS,
        `</div><div class="align-center bg-black-lighter my-16 mx-0 w-screen"><div class="m-0 -mr-4 max-w-none px-3 py-0 relative bg-grey-lighter">` +
        `<p class="block font-bold leading-loose mt-0 text-grey-darker uppercase md:text-center">$1</p></div>` +
        `<div class="mx-auto my-0 max-w-xl gatsby-highlight">$&</div></div><div class="text-xl font-light p-3 md:p-0 md:max-w-max post-copy">`
    );

    if (contentContainsMarkup) {
        html += '</div>';
    }

    return (
        <section className="items-center flex flex-col justify-end mt-0" dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody">

        </section>
    );
}

PostBody.propTypes = {
    content: PropTypes.shape({
        html: PropTypes.string.isRequired,
    }),
};
