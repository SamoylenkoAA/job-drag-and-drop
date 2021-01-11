import React from 'react';
import classes from './Wrapper.module.css'
import ChildWrapper from "./ ChildWrapper/ ChildWrapper";

const Wrapper = ({children}) => {
    let renderChild = children.filter((child, i) => i !== 0);
    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapperHeader}>
                {children[0]}
            </div>
            <ChildWrapper>
                {renderChild}
            </ChildWrapper>
        </div>
    )
}

export default Wrapper;