import React, { Component } from 'react';
import classes from './Previwer.module.css';

import MainControls from '../components/previwer/mainControls/MainControls';
import TesteSpace from '../components/previwer/testSpace/TesteSpace';
import CopyArea from '../components/previwer/copyArea/CopyArea';
import InputValue from '../components/previwer/inputValues/InputValue';

class Previwer extends Component {

    state = {
        state1: 'hello!'
    }

    render(){
        return (
            <div className={classes.Previwer}>
                <InputValue classes={classes.Border} gridAreaId="input1"/>
                <InputValue classes={classes.Border} gridAreaId="input2"/>
                <InputValue classes={classes.Border} gridAreaId="input3"/>
                <InputValue classes={classes.Border} gridAreaId="input4"/>                
                <MainControls classes={classes.Border.concat(' ').concat(classes.Change)}>Main controls</MainControls>
                <TesteSpace classes={classes.Border}>Teste space</TesteSpace>
                <CopyArea classes={classes.Border}>Copy area</CopyArea>
            </div>

        );
    }
}

export default Previwer;