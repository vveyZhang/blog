import React from 'react';
import {Link} from 'react-router';
export class Left extends React.Component{
    render(){
        return(
            <div className="home-left" >
                <div className="home-logo">
                    <a href=""><img src="http://localhost:8181/images/tx.jpg" width="40" height="40" alt=""/><span>vvey  前端笔记</span></a>
                </div>
                <ul className="home-nav">
                    <li>
                        <p className='home-nav-label'>jquery</p>
                        <ul className="home-nav-list">
                           <li><Link activeClassName="cur" to="/home/article/1">jquery基础笔记</Link></li>
                           <li><Link activeClassName="cur" to="/home/article/2">jquery事件绑定兼容性</Link></li>
                           <li><Link activeClassName="cur" to="/home/article/3">jquery阻止冒泡和默认事件</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
