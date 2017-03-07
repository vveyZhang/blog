/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
import $ from 'jquery';
import {Header} from './header.js';
import {Footer} from './footer.js';
import {Home} from './home.js'
export class Vvey extends React.Component{
    componentDidMount(){
        $('.padding-bottom').css({
            'min-height':$(window).height()
        });
    }
    render(){
        return(
            <div className="padding-bottom">
                <Header></Header>
                {this.props.children ||<Home />}
                <Footer></Footer>
            </div>
        )
    }
}
