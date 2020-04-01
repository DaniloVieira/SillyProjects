import React from 'react';
// import classes from './CopyArea.module.css';

const copyArea = (props) => {
    return (
        <div className={props.classes} style={{ gridArea: 'copy-area'}}>
            {props.children}
        </div>
    );
}

export default copyArea;

