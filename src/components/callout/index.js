import React from 'react';
import PropTypes from 'prop-types';

import style from './callout.module.css';


export default function Callout({ message }) {
    return (
        <div className={ style.callout }>
            { message }
        </div>
    );
}

Callout.propTypes = {
    message: PropTypes.string.isRequired,
};
