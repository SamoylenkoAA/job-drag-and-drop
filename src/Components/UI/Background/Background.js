import React from "react";
import classes from './Background.module.css'

const Background = ({ isOver, children }) => {
    const className = isOver ? classes.over : classes.wrapper;

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Background;