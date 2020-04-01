import React, { Component } from 'react';
import classes from './Previwer.module.css';

import MainControls from '../components/previwer/mainControls/MainControls';
import TesteSpace from '../components/previwer/testSpace/TesteSpace';
import CopyArea from '../components/previwer/copyArea/CopyArea';
import InputValue from '../components/previwer/inputValues/InputValue';

class Previwer extends Component {

    state = {
        state1: 'hello!',
        upRigth: '0',
        upLeft: '270',
        bottonLeft: '180',
        bottonRigth: '90'
    }

    render(){
        return (
            <div className={classes.Previwer}>
                <InputValue classes={classes.Border} gridAreaId="input1" postion={this.state.upLeft}/>
                <InputValue classes={classes.Border} gridAreaId="input2" postion={this.state.upRigth}/>
                <InputValue classes={classes.Border} gridAreaId="input3" postion={this.state.bottonLeft}/>
                <InputValue classes={classes.Border} gridAreaId="input4" postion={this.state.bottonRigth}/>                
                <MainControls classes={classes.Border.concat(' ').concat(classes.Change)}>Main controls</MainControls>
                <TesteSpace classes={classes.Border}>Teste space</TesteSpace>
                <CopyArea classes={classes.Border}>Copy area</CopyArea>
            </div>

        );
    }
}

export default Previwer;