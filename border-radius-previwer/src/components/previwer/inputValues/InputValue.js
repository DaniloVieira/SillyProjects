import React from 'react';
import classes from './InputValue.module.css';

import { FaCompress } from "react-icons/fa";

const inputValue = (props) => {
    return (

       
        <div className={classes.InputValues} style={{ gridArea: props.gridAreaId}}>
            <div className={classes.InputContainer}>
                <input type='number' maxLength="3"/>
                <input type='number' maxLength="3"/>
            </div>
            <div><button><FaCompress></FaCompress></button></div>
        </div>
    );
}

export default inputValue;
