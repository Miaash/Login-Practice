
import React from 'react';

import classes from "./Button.module.css";

const Button = (props) => {
    return(
            <button 
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            // 타입 조건부 Or 순서가 바뀌면 동작이 안돼?? 미친,,,
            type={props.type || 'button'}
            disabled={props.disabled}
            >
                {props.children}
            </button>
    )
}

export default Button;

