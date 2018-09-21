import React from 'react';

import style from './callout.module.css';

export default ({ props }) =>  {
    return (
        <div className={ style.callout }>
            { props.message }
        </div>
    );
};
