import React from 'react';
import {ArticleLfet} from './articleLeft.js'
import {Header} from '../header.js';
import $ from 'jquery'
export class HomeArticleMain extends React.Component{
    componentDidMount(){
        $('.padding-bottom').css({
            'min-height':$(window).height()
        })
    }
    render(){
        return(
        <div className="padding-bottom">
            <Header></Header>
            <div className="home-main">
                <div className="row">
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                    <div className="col-md-3">
                        <ArticleLfet></ArticleLfet>
                    </div>
                </div>
            </div>
            <div id="site-footer">
                <div className="">
                    <div className="col-md-12">
                        <p className="copyright">&copy; 2017 vveyzhang.com  </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
