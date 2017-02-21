import React from 'react';
import $ from 'jquery'
function getArticle(id,that){
    $.ajax({
        type:'get',
        url:'/handle/home/article/'+id,
        success:function(data){
console.log(data)
            that.setState({
                article:data
            });
            toggleDuoshuoComments(that.refs.comments,that)
        }
    })
}
function toggleDuoshuoComments(container,that){
    window.onload=function(){
      
        var url='http://'+window.location.hostname+'/home/article/'+that.state.article.id;
        document.getElementById('comments').innerHTML="";
        var el = document.createElement('div');//该div不需要设置class="ds-thread"
        el.setAttribute('data-thread-key', that.state.article.id);//必选参�?
        el.setAttribute('data-url', url);//必选参�?
        el.setAttribute('data-title', that.state.article.article_title);//可选参�?
        DUOSHUO.EmbedThread(el);
      ;
        document.getElementById('comments').appendChild(el);
    }


}
export class HomeArticleDetails extends React.Component{
    state={
        article:{}
    };
    componentDidMount(){
        var id=this.props.params.id;
        var that=this;
        getArticle(id,that);
    }
    componentWillReceiveProps(nextprops){
        var id=nextprops.params.id;
        var that=this;
        getArticle(id,that);
    }
    render(){
        var article=[];
                   console.log(222)
        if(!article.article_title) return(<div></div>);
        var time=article.created_at.substring(0,10);
        var link="http://"+window.location.hostname+"/notes/article/"+article.id;
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