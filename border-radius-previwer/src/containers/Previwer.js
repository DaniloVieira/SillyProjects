import React, { Component } from 'react';
import classes from './Previwer.module.css';

class Previwer extends Component {

    state = {
        state1: 'hello!'
    }

    render(){
        return (
            <div className={classes.Previwer}>
                Previwer
                <div className={classes.Border}>main controls</div>
                <div className={classes.Border}>test space</div>
                <div className={classes.Border}>copy area</div>
            </div>

        );
    }
}

export default Previwer;