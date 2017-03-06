
import React from 'react';
import {ArticleLfet} from './article/articleLeft.js';
import {ArticleContainer} from './article/articleContainer.js'
export class Home extends React.Component{
    render(){
        return(
            <div className="home-main shouye">
                <div className="row">
                    <div className="col-md-9 padding-b" >
                        {this.props.children||<ArticleContainer />}
                    </div>
                    <div className="col-md-3">
                        <ArticleLfet></ArticleLfet>
                    </div>
                </div>
            </div>
        )
    }
}
