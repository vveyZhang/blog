import React from 'react';

export class ArticlePreview extends React.Component{
    render(){
        var content=this.props.article.article_content.replace(/<[^>]+>/g,"");
            content=content.replace(/&nbsp;/g,"");
        var link='article/'+this.props.article.id;
        return(
            <div className="articlePreview">
                <h1 className="articlePreview-title"><a href={link}>{this.props.article.article_title}</a></h1>
                <div className="articlePreview-content">{content}</div>
                <div className="articlePreview-tool">
                    <a className="articlePreview-read" href={link}>阅读</a>
                </div>
            </div>
        )
    }
}