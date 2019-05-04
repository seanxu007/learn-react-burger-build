import React from 'react';

import classes from './DrawToggle.css';

const drawToggle = (props) => (
    <div className={classes.DrawToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawToggle;