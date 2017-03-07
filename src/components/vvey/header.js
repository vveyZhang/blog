import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
export class Header extends React.Component{
    state={
        show:false,
        nav:false,
        keyword:''
    };
    searchToggle=(e)=>{
        this.setState({
            show:!this.state.show
        })
    };
    toggleNav=(e)=>{
        $(this.refs.mobileNav).toggleClass('open');
    };
    changeKeyword=(e)=>{
        var e=e||event;
        this.setState({
            keyword:e.target.value
        })
    };
    keyDown=(e)=>{
        var e= e||event;
        if(e.keyCode==13)this.goSearch()
    }
    goSearch=(e)=>{
        if(this.state.keyword==""){
            alert('输入内容不能为空');
            return
        }
        let keyword=this.state.keyword.length>50?this.state.keyword.slice(0,49):this.state.keyword
       window.location="/home/search/"+keyword
    };
    componentDidMount(){
    }
    render(){
        console.log(window.location);
        var home="http://"+window.location.host+'/home';
        var about="http://"+window.location.host+'/about';
        return(
            <div className="header-container">
                <div id="site-header">
                    <div className="row">
                        <div className="col-md-4 col-sm-5 col-xs-8">
                            <div className="logo">
                                <h1><a href={home}><b>vvey</b> &amp; 前端笔记</a></h1>
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
                                        <li className="cl-effect-11"><a href={home} data-hover="首页">首页</a></li>
                                        <li className="cl-effect-11"><a href={about} data-hover="关于我">关于我</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <div id="header-search-box">
                                <a id="search-menu" onClick={this.searchToggle} href="javascript:void(0)"><span id="search-icon" className="ion-ios-search-strong"></span></a>
                                <div id="search-form" className="search-form" style={{display:this.state.show?"block":"none"}}>
                                    <div id="searchform">
                                            <input type="search"  ref='search' onKeyDown={this.keyDown.bind(this)} value={this.state.keyword} onChange={this.changeKeyword} placeholder="Search" required />
                                            <button  onClick={this.goSearch.bind(this)} type="submit" ><span className="ion-ios-search-strong"></span></button>
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
                            <li><a href={home}>首页</a></li>
                            <li><a href={home}>关于我</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

