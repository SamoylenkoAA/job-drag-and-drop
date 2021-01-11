import React from 'react';
import classes from './ChildWrapper.module.css'

const ChildWrapper =({children}) => {
    return(
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default ChildWrapper;