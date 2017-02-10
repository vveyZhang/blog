import React from 'react';
import {AllHeader} from './allHeader.js'
import {ArticlePreview} from './articlePreview.js'

export class AllArticle extends React.Component{
    render(){
        return(
            <div className="AllArticle-main">
                <AllHeader ></AllHeader>
                <div className="AllArticle-content" >
                    <ArticlePreview ></ArticlePreview>
                </div>

            </div>
        )
    }
}
