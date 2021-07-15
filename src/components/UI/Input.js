import React from 'react';

import classes from './Input.module.css'

const input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* id={props.input.id} */}
        <input ref={ref} {...props.input}/>
    </div>
});

export default input;