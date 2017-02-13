import React from 'react';
import $ from 'jquery';
import {homeAction} from '../../../actions/homeAction.js'
export class ArticleDetails extends React.Component{
    state={
        article:{}
    };
    componentDidMount(){
        $.get({
            url:'/handle/home/article/'+this.props.params.id
        }).then(data=>{this.setState({
            article:data
        });
            toggleDuoshuoComments(this.refs.comments)
        }).catch(err=>console.log(err));
        var that=this;
        function toggleDuoshuoComments(container){
            var url='http://127.0.0.1:3000/home/article/'+that.state.article.id;
            $(container).empty();
            var el = document.createElement('div');//该div不需要设置class="ds-thread"
            el.setAttribute('data-thread-key', that.state.article.id);//必选参数
            el.setAttribute('data-url', url);//必选参数
            el.setAttribute('data-title', that.state.article.article_title);//可选参数
            DUOSHUO.EmbedThread(el);
            $(container).append(el);
        }
    }
    componentWillReceiveProps(nextProps){
        $.get({
            url:'/handle/home/article/'+nextProps.params.id
        }).then(data=>{this.setState({
            article:data
        });
            toggleDuoshuoComments(this.refs.comments)
        }).catch(err=>console.log(err));
        var that=this;
        function toggleDuoshuoComments(container){
            var url='http://127.0.0.1:3000/home/article/'+that.state.article.id;
            $(container).empty();
            var el = document.createElement('div');//该div不需要设置class="ds-thread"
            el.setAttribute('data-thread-key', that.state.article.id);//必选参数
            el.setAttribute('data-url', url);//必选参数
            el.setAttribute('data-title', that.state.article.article_title);//可选参数
            DUOSHUO.EmbedThread(el);
            $(container).append(el);
        }
    }
    render(){
        return(
            <div className="articleDetails">
                <div className="all-article-header">
                    <div className="all-article-icon" onClick={homeAction.toggle}></div>
                    <h1 className="header-article-title">{this.state.article.article_title}</h1>
                </div>
                <h1 className="articleDetails-title">{this.state.article.article_title}</h1>
                <div className="articleDetails-content" dangerouslySetInnerHTML={{__html: this.state.article.article_content}}>

                </div>
                <div ref='comments' id='comments'></div>
            </div>
        )
    }
}
