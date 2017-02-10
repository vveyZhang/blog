import React from 'react';
import $ from 'jquery';
import {manageAction} from '../../actions/manageAction.js'
import {manageStore} from '../../stores/manageStores.js'
export class CheckBox extends React.Component{

    componentDidMount(){
    }
    clickChecked=()=>{
        if(this.props.articleId){
            this.props.checkEvent(this.props.articleId);
            return;
        }
        this.props.checkEvent();
    };
    render(){
        return(
            <div  onClick={this.clickChecked}  className={this.props.checked?'check-box checked':'check-box'} >
            </div>
        )
    }
}