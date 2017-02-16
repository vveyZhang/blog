import React from 'react';

export class ArticlePreview extends React.Component{
    render(){
        var content=this.props.article.article_content.replace(/<[^>]+>/g,"");
            content=content.replace(/&nbsp;/g,"");
        var link='article/'+this.props.article.id;
        return(
            <div className="articlePreview">
                <div className="entry-header">
                    <h1 className="entry-title">
                        <a href={link}>{this.props.article.article_title}</a>
                    </h1>
                    <div className="entry-meta">
                        <span className="post-category">Web Design</span>

                        <span className="post-date">2017-2-3</span>

                        <span className="post-author">vvey</span>

                        <span className="comments-link">4 Views</span>
                    </div>
                </div>
                <div className="entry-content clearfix">
                    <p>{content}</p>
                </div>
                <div className="articlePreview-line"></div>
            </div>
        )
    }
}