import React from 'react';
// import classes from './MainControls.module.css';

const mainControls = (props) => {
    return (
        <div className={props.classes} style={{ 'grid-area': 'control'}}>            
            {props.children}
        </div>
    );

}

export default mainControls;