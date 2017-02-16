import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
import ReactMixin from 'react-mixin';
import Reflux from 'reflux'
import {homeStore} from '../../stores/homeStores.js'
import {homeAction} from '../../actions/homeAction.js'
export class HomeHeader extends React.Component{
    state={
        show:false,
        nav:false
    };
    searchToggle=(e)=>{
        this.setState({
            show:!this.state.show
        })
    };
    toggleNav=(e)=>{
        console.log(this.refs.mobileNav);
        $(this.refs.mobileNav).toggleClass('open');
    }
    componentDidMount(){

    }
    render(){

        return(
            <div className="header-container">
                <div id="site-header">
                    <div className="row">
                        <div className="col-md-4 col-sm-5 col-xs-8">
                            <div className="logo">
                                <h1><a href="index.html"><b>vvey</b> &amp; 前端笔记</a></h1>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-7 col-xs-4">

                            <nav className="main-nav" role="navigation">
                                <div className="navbar-header">
                                    <button type="button" onClick={this.toggleNav} id="trigger-overlay" className="navbar-toggle">
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="cl-effect-11"><a href="index.html" data-hover="首页">首页</a></li>
                                        <li className="cl-effect-11"><a href="about.html" data-hover="关于我">关于我</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <div id="header-search-box">
                                <a id="search-menu" onClick={this.searchToggle} href="javascript:void(0)"><span id="search-icon" className="ion-ios-search-strong"></span></a>
                                <div id="search-form" className="search-form" style={{display:this.state.show?"block":"none"}}>
                                    <div id="searchform">
                                            <input type="search" placeholder="Search" required />
                                            <button type="submit"><span className="ion-ios-search-strong"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div  ref="mobileNav" className="overlay overlay-hugeinc">
                    <button type="button" onClick={this.toggleNav} className="overlay-close"><span className="ion-ios-close-empty"></span></button>
                    <nav>
                        <ul>
                            <li><a href="index.html">首页</a></li>
                            <li><a href="full-width.html">关于我</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
//ReactMixin.onClass(Left, Reflux.connect(homeStore,'show'));
