/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
import $ from 'jquery';
import {HomeHeader} from './homeHeader';

export class Home extends React.Component{
    componentDidMount(){
    }
    state={
        fullScreen:false
    }
    toggleFull=(e)=>{
        this.setState({
            fullScreen:!this.state.fullScreen
        })
    }
    render(){
        return(
            <div>
                <HomeHeader></HomeHeader>
                <div className="home-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}