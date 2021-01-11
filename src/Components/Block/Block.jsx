import React from 'react';
import ITEM_TYPE from './../Data/types';
import { useDrag } from 'react-dnd';

import classes from './Block.module.css'

const Block = ({indexBlock, item, idPageDrag}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, indexBlock, idPageDrag},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    return(
        <div className={classes.wrapper} ref={drag}  style={{opacity: isDragging ? '0.1' : null}}>
            <div className={classes.title}>
                {item.title}
            </div>
        </div>
    )
}
export default Block;