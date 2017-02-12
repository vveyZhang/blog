import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
export class Left extends React.Component{
    state={
        nav:[]
    };
    componentDidMount(){
        $.ajax({
            url:"/handle/home/title",
            type:'get'
        }).then(data=>{
            this.setState({
                nav:data
            })
        }).catch(err=>console.log(err))
    }

    render(){
        return(
            <div className="home-left" >
                <div className="home-logo">
                    <a href="/"><img src="http://localhost:3000/images/tx.jpg" width="40" height="40" alt=""/><span>vvey  前端笔记</span></a>
                </div>
                <ul className="home-nav">
                    {
                        this.state.nav.map((type,key)=>{

                            return(
                                <li key={key}>
                                    <p className='home-nav-label'>{type.article_type}</p>
                                    <ul className="home-nav-list">
                                        {
                                            type.list.map((title,i)=>{
                                                var link="/home/article/"+title.id;
                                                return(
                                                    <li key={i}><Link activeClassName="cur" to={link}>{title.article_title}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )

                        })

                    }
                </ul>
            </div>
        )
    }
}
