/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
import $ from 'jquery';
import {Left} from './left';

export class Home extends React.Component{
    componentDidMount(){
        $('.home-main').css({'min-height':$(window).height()})
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
            <div className='home-main'>
                <Left style={{width:this.state.fullScreen? '0px':'299px'}}></Left>
                <div className="home-right">
                    {this.props.children}
                </div>
            </div>
        )
    }
}