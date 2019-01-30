import React from "react";
import PropTypes from 'prop-types';

import vrImage from '../../images/vr.svg';
import codeImage from '../../images/code.svg';
import generalImage from '../../images/general.svg';
import softwareImage from '../../images/software.svg';
import webImage from '../../images/web.svg';

const dictionary = {
    vr: {
        alt: 'Man wearing a virtual reality headset',
        src: vrImage,
    },
    code: {
        alt: '',
        src: codeImage,
    },
    general: {
        alt: '',
        src: generalImage,
    },
    software: {
        alt: '',
        src: softwareImage,
    },
    web: {
        alt: '',
        src: webImage,
    },
};


export default function CategoryImage({ height, width, category, cssClass }) {
    const img = dictionary[category.toLowerCase()];

    return (
        <img alt={ img.alt } src={ img.src } height={ height } width={ width } className={ cssClass } />
    );
}

CategoryImage.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    cssClass: PropTypes.string,
};
