import React from 'react';
export class About extends React.Component{
    render(){
        return(
            <div className="home-main">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-title">About Me</h1>
                        <div className="entry-content clearfix">
                            <div className="img-responsive-center">
                                <img className="img-responsive" src="http://www.vveyzhang.com/images/about-bg.jpg" />
                            </div>
                            <h1 className="about-job">职业-前端攻城狮</h1>
                            <p>真不知道“关于”这个板块应该写点什么，但不要这感觉少了点东西，后来想了想写点东西可能会点好吧，毕竟我单身，万一有妹纸看到这个看上我了这不是也可以？</p>
                            <p>回归正题，这里面所有文章都是个人根据平时学到、用到或者看到的东西，仅限交流学习，毕竟我也菜，如果有什么写错的感觉各位大神在文章中提出，也可以加我微信私下交流学习。</p>
                            <div className="height-40px"></div>
                            <div className="my-code"><img src="http://www.vveyzhang.com/images/my-code.png" alt="" width="200" height="200"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}