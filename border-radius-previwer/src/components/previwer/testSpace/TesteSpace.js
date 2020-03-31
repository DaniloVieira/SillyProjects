import React from 'react';
// import classes from './TesteSpace.module.css';

const testSpace = (props) => {
    return (
        <div className={props.classes} style={{ 'grid-area': 'test-space'}}>
            {props.children}
        </div>
    );
}

export default testSpace;

