import React from 'react';
import classes from './TesteSpace.module.css';

const testSpace = (props) => {
    return (
        <div className={classes.TestSpace} >
            <div style={{border: 'blue 1px solid', borderRadius: "15%", margin: '2%', display: 'flex', 'align-items': 'stretch'}}>
                test element
            </div>
        </div>
    );
}

export default testSpace;

