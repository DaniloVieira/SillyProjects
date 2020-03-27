import React from 'react';
import Aux from '_aux.js';
import classes from './Layout.module.css';

const layout = props => {

    return(
        <Aux>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;