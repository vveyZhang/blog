import React from 'react';

export class ArticleDetails extends React.Component{

    render(){
        return(
            <div className="articleDetails">
                <div className="all-article-header">
                    <div className="all-article-icon"></div>
                    <div className="all-article-header-right">
                        <div className="all-article-contact article-share-icon">
                            <img style={{marginTop:'7px'}} className='icon ' src="http://localhost:8181/images/article-share.png" width='16' height="16" alt=""/>
                            <div className="article-contact-content article-share-content">
                                <ul className="article-share-list">
                                    <li><a href="">分享到空间</a></li>
                                    <li><a href="">分享到新浪</a></li>
                                    <li><a href="">分享到微信</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h1 className="header-article-title">flex基础语法介绍</h1>
                </div>
                <h1 className="articleDetails-title">flex基础语法介绍</h1>
                <div className="articleDetails-content">

                </div>
            </div>
        )
    }
}
