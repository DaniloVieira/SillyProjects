import React from 'react';
import classes from './InputValue.module.css';

// import { FiMaximize } from "react-icons/fi";
import { MdRoundedCorner } from "react-icons/md";


const inputValue = (props) => {
    return (       
        <div className={classes.InputValues} style={{ gridArea: props.gridAreaId}}>
            <div className={classes.InputContainer}>
                <input type='number' maxLength="3"/>
                <input type='number' maxLength="3"/>
            </div>
            <div className={classes.ButtonContainer}><button><MdRoundedCorner size={'2em'} style={{transform: 'rotate('+props.postion+'deg)'}}/></button></div>
        </div>
    )
}

export default inputValue;
