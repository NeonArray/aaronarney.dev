import React from 'react';

import style from './callout.module.css';

export default ({ message }) =>  {
    return (
        <div className={ style.callout }>
            { message }
        </div>
    );
};
