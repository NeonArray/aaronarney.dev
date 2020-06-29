import * as React from "react";
import { ReactComponentElement } from "react";

// import vrImage from '../../images/vr.svg';
// import codeImage from '../../images/code.svg';
// @ts-ignore
import * as generalImage from "../../images/general.svg";
// @ts-ignore
import * as softwareImage from "../../images/software.svg";
// @ts-ignore
import * as webImage from "../../images/web.svg";

interface IProps {
    readonly height: number;
    readonly width: number;
    readonly category: string;
    readonly cssClass?: string;
}

const dictionary = Object.freeze({
    // vr: {
    //     alt: 'Man wearing a virtual reality headset',
    //     src: vrImage,
    // },
    // code: {
    //     alt: '',
    //     src: codeImage,
    // },
    general: {
        alt: "An owl winking",
        src: generalImage,
    },
    software: {
        alt: "Abstract computer screen and pie charts",
        src: softwareImage,
    },
    web: {
        alt: "A text editor with binary code",
        src: webImage,
    },
    website: {
        alt: "A text editor with binary code",
        src: webImage,
    },
});

export default function Image({
    height,
    width,
    category,
    cssClass,
}: IProps): ReactComponentElement<any> {
    const img: { alt: string; src: string } =
        dictionary[category.toLowerCase()];

    return (
        <img
            alt={img.alt}
            src={img.src}
            height={height}
            width={width}
            className={cssClass}
        />
    );
}
