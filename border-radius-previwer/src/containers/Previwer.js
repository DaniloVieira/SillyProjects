import React, { Component } from 'react';
import classes from './Previwer.module.css';

class Previwer extends Component {

    state = {
        state1: 'hello!'
    }

    render(){
        return (
            <div className={classes.Previwer}>
                <div style={{'grid-area': 'input1'}}>1<input type='number' style={{width : '35px', border: 'blue 1px doted'}}/></div>
                <div style={{'grid-area': 'input2'}}>2<input type='number' style={{width : '35px', border: 'blue 1px doted'}}/></div>
                <div style={{'grid-area': 'input3'}}>3<input type='number' style={{width : '35px', border: 'blue 1px doted'}}/></div>
                <div style={{'grid-area': 'input4'}}>4<input type='number' style={{width : '35px', border: 'blue 1px doted'}}/></div>

                <div className={classes.Border} style={{ 'grid-area': 'control'}}>main controls</div>
                <div className={classes.Border} style={{ 'grid-area': 'test-space'}}>test space</div>
                <div className={classes.Border} style={{ 'grid-area': 'copy-area'}}>copy area</div>
            </div>

        );
    }
}

export default Previwer;