import React from 'react';

export class HomeArticleItem extends React.Component{

    render(){

        var article=this.props.article;
        var time=article.created_at.substring(0,10);

        var link="/home/article/"+article.id;
        var content=this.props.article.article_content.replace(/<[^>]+>/g,"");
        content=content.replace(/&nbsp;/g,"");
        content=content.substring(0,200)+".......";
        if(this.props.keyword){
            const reg=new RegExp(this.props.keyword,'g')
            content=content.replace(reg,'<span>'+this.props.keyword+'</span>')
        }
        return(
            <div>
                <div className="post">
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
                    <div className="entry-content clearfix">
                        <p dangerouslySetInnerHTML={{__html:content}}></p>
                    </div>
                </div>
            </div>
        )
    }
}/**
 * Created by helloxwz on 2017/2/17.
 */
