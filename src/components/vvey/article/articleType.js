import React from 'react';
import {ArticleContainer} from './articleContainer.js';
export class ArticleType extends React.Component{
    render(){
        return (
            <ArticleContainer typeId={this.props.params.id}></ArticleContainer>
        )
    }
}
