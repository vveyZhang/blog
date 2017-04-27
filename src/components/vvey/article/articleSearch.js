import React from 'react';
import {ArticleContainer} from './articleContainer.js';
export class ArticleSearch extends React.Component{
    render(){
        return(
            <ArticleContainer keyword={this.props.location.query.keyword}></ArticleContainer>
            )
    }
}
