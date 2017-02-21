import {Header} from './home/header.js';
import {Footer} from './home/footer.js';
import React from 'react';
import {Link} from 'react-router'
export class NotFound extends React.Component{
    render(){
        return(
            <div className="err-page padding-bottom">
                <Header></Header>
                <div className="NotFound-container">
                    <img src="http://www.vveyzhang.com/images/NotFound-pic.jpg" className="NotFound-pic" alt="" width="228" height="222"/>
                    <p className="NotFound-tips">您访问的页面不存在</p>
                    <a href='/home' className="NotFound-back">返回首页</a>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}
