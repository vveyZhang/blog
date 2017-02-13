import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
import ReactMixin from 'react-mixin';
import Reflux from 'reflux'
import {homeStore} from '../../stores/homeStores.js'
import {homeAction} from '../../actions/homeAction.js'
export class Left extends React.Component{
    state={
        nav:[],
        show:homeStore.getStatus()
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
            <div  className={this.state.show?'home-left':'home-left hidden'} >
                <div className="home-logo">
                    <a href="/"><span>vvey  前端笔记</span></a>
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

ReactMixin.onClass(Left, Reflux.connect(homeStore,'show'));
