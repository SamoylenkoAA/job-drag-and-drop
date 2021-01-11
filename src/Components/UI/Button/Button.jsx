import React from 'react';
import classes from './Button.module.css'
const Button = ({onAddBlock}) => {
    return(
        <button
            className={classes.button}
            onClick={onAddBlock}>
            <p>➕</p>
        </button>
    )
}

export default Button