import React from 'react';

export class AllHeader extends React.Component{
    render(){
        return(
            <div className="all-article-header">
                <div className="all-article-icon"></div>
                <div className="all-article-header-right">
                    <div className="all-article-contact">
                        <a href=""><img className='icon' src="http://localhost:8181/images/weiBo-icon.png"  alt=""/></a>
                    </div>
                    <div className="all-article-contact">
                        <img className='icon' src="http://localhost:8181/images/weChat-icon.png"  alt=""/>
                        <div className="article-contact-content">
                            <img src="http://localhost:8181/images/my-code.png" width="80" height="80" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
