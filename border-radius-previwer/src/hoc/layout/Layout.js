import React from 'react';
import Aux from '../_Aux/_Aux';
import classes from './Layout.module.css';

const layout = props => {

    return(
        <Aux>
            <div className={classes.Content}>
                {props.children}
            </div>
        </Aux>
    );
}

export default layout;