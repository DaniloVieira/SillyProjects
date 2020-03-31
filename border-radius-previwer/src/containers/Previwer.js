import React, { Component } from 'react';
import classes from './Previwer.module.css';

import MainControls from '../components/previwer/mainControls/MainControls';
import TesteSpace from '../components/previwer/testSpace/TesteSpace';
import CopyArea from '../components/previwer/copyArea/CopyArea';

class Previwer extends Component {

    state = {
        state1: 'hello!'
    }

    render(){
        return (
            <div className={classes.Previwer}>
                <div style={{'grid-area': 'input1', border: 'blue 1px dotted'}}>1<input type='number' style={{width : '35px'}}/></div>
                <div style={{'grid-area': 'input2', border: 'blue 1px dotted'}}>2<input type='number' style={{width : '35px'}}/></div>
                <div style={{'grid-area': 'input3', border: 'blue 1px dotted'}}>3<input type='number' style={{width : '35px'}}/></div>
                <div style={{'grid-area': 'input4', border: 'blue 1px dotted'}}>4<input type='number' style={{width : '35px'}}/></div>

                <MainControls classes={classes.Border.concat(' ').concat(classes.Change)}>main controls</MainControls>
                <TesteSpace classes={classes.Border}>Teste space</TesteSpace>
                <CopyArea classes={classes.Border}>Copy area</CopyArea>
            </div>

        );
    }
}

export default Previwer;