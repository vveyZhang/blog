import React from 'react';
import {ArticleLfet} from './articleLeft.js'
import {Header} from '../header.js'
export class HomeArticleMain extends React.Component{

    render(){
        return(
        <div>
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
            <div id="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="copyright">&copy; 2017 vveyzhang.com  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
