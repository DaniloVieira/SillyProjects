import React from 'react';
import classes from './MainControls.module.css';

const mainControls = (props) => {
    return (
        <div className={classes.MainControls} style={{ gridArea: 'control'}}>
            Controls          
            <div><button>APPLY</button></div>
        </div>
    );

}

export default mainControls;