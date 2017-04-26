import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'
export class ArticleLfet extends React.Component{
    state={
        category:[],
        hot:[],
        newest:[]
    };
    componentDidMount(){
        $.get({url:'/handle/home/title'}).then(data=>{
            this.setState({
                category:data.category?data.category:[],
                newest:data.newest?data.newest:[]
            })

        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div style={{'paddingLeft':'25px'}}>
                <div className="widget widget-recent-posts">
                    <h3 className="widget-title">最新文章</h3>
                    <ul>
                        {
                            this.state.newest.map(function(item,key){
                                var link="/home/article/"+item.id;
                                return(
                                    <li key={key}>
                                        <a href={link}>{item.article_title} <span>[{item.views}] views</span></a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="widget widget-category">
                    <h3 className="widget-title">文章分类</h3>
                    <ul>
                        {

                            this.state.category.map(function(item,key){
                                var link="/home/type/"+item.id;
                                return(
                                    <li key={key}>
                                        <Link activeClassName='cur' to={link}>{item.article_type}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}
