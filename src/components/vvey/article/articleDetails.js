import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
function PingLun(){
    var appid = 'cysXTHp0A';
    var conf = 'prod_8ddeeb14437d258919dc6ccb78e223f6';
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
        window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); }
}
export class HomeArticleDetails extends React.Component{
    state={
        article:{}
    };
    componentDidMount(){
        var id=this.props.params.id;
        var that=this;
        this.getArticle(id,that);
    }
    getArticle(id,that){
        $.ajax({
            type:'get',
            url:'/handle/home/article/'+id,
            success:function(data){
                if(!data){
                    browserHistory.replace('/notFound');
                    return;
                };
                that.setState({
                    article:data
                });
                $('#comments').empty();
                $('#comments').append("<a href='#SOHUCS' id='changyan_count_unit'></a><a href='#SOHUCS' id='changyan_parti_unit'></a><div id='SOHUCS' sid="+id+" ></div>")
                PingLun();
            }
        })
    }
    componentWillReceiveProps(nextprops){
        var id=nextprops.params.id;
        var that=this;
        this.getArticle(id,that);
    }
    render(){
        var article=this.state.article;
        if(!article.article_title) return(<div></div>);
        var time=article.created_at.substring(0,10);
        var link="/home/article/"+article.id;
        return(
            <div className="article-details">
                <div className="entry-header">
                    <h1 className="entry-title">
                        <a href={link}>{article.article_title}</a>
                    </h1>
                    <div className="entry-meta">
                        <span className="post-category">{article.article_type}</span>

                        <span className="post-date">{time}</span>

                        <span className="post-author">{article.article_author}</span>

                        <span className="comments-link">{article.views} Views</span>
                    </div>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{__html:article.article_content}}>
                </div>
                <div id="comments" ref="comments">

                </div>
            </div>
        )
    }
}