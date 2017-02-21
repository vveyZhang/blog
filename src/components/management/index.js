import React from 'react';
import $ from 'jquery'
import {ArticleList} from './articleList.js';
import {Link} from 'react-router';

export class Management extends React.Component{
    componentDidMount(){
       const ch=$(window).height();
        $('#management').css({'min-height':ch});
        $(window).resize(function(){
            const ch=$(window).height();
            $('#management').css({'min-height':ch});
        });
    }
    render(){
        var outIn=window.location.hostname+"/out"
        return(
            <div className="management-body" id="management">
                <div className="management-left noselect" >
                    <h1 className="main-title">vvey</h1>
                    <div className="management-logo">
                        <img src="http://www.vveyzhang.com/images/tx.jpg" width="150" height="150" alt=""/>
                        <div className="management-logo-bg"></div>
                    </div>
                    <nav className="management-nav">
                        <ul>
                            <li><Link activeClassName="cur" to="/admin/articlelist/">全部文章</Link></li>
                            <li><Link activeClassName="cur" to="/admin/push">发表文章</Link></li>
                            <li><a  href={outIn}>退出</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="management-right">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
