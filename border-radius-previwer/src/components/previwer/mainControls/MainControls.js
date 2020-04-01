import React from 'react';
import classes from './MainControls.module.css';

import { FiMaximize } from "react-icons/fi";

const mainControls = (props) => {
    return (
        <div className={classes.MainControls} style={{ gridArea: 'control'}}>
            Controls          
            <div><button><FiMaximize/></button></div>
        </div>
    );

}

export default mainControls;