import React from 'react';
import { useDrop } from "react-dnd";
import ITEM_TYPE from './../Data/types';
import classes from './Page.module.css';

const Page = ({onDrop, children, page, index}) =>{
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
           onDrop(item, index, monitor)
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });
    return(
        <div className={classes.wrapper} ref={drop}>
            <div className={classes.wrapperBlock}>
                <div className={classes.title}>
                    {page.title}
                </div>
                {React.cloneElement(children, { isOver })}
            </div>
        </div>
    )
}

export default Page;