import React from 'react';
import {ArticleLfet} from './articleLeft.js'
export class HomeArticleMain extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-8">
                    {this.props.children}
                </div>
                <div className="col-md-4">
                    <ArticleLfet></ArticleLfet>
                </div>
            </div>
        )
    }

}
