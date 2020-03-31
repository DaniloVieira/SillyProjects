import React from 'react';
// import classes from './CopyArea.module.css';

const copyArea = (props) => {
    return (
        <div className={props.classes} style={{ 'grid-area': 'copy-area'}}>
            {props.children}
        </div>
    );
}

export default copyArea;

