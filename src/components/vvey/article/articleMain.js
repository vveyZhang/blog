import React from 'react';
import {ArticleLfet} from './articleLeft.js'
import {Header} from '../header.js';
import {Footer} from '../footer.js';
import $ from 'jquery'
export class HomeArticleMain extends React.Component{
    componentDidMount(){    }
    render(){
        return(
        <div className="padding-bottom">
            <Header></Header>
            <div className="home-main">
                <div className="row">
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                    <div className="col-md-3">
                        <ArticleLfet></ArticleLfet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        )
    }
}
