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
                category:data.category,
                newest:data.newest
            })

        });

    }
    render(){
        var host=window.location.hostname;
        return(
            <div>
                <div className="widget widget-recent-posts">
                    <h3 className="widget-title">最新文章</h3>
                    <ul>
                        {

                            this.state.newest.map(function(item,key){
                                var link="http://"+host+"/notes/home/article/"+item.id;
                                return(
                                    <li key={key}>
                                        <a href={link}>{item.article_title} <span>[{item.views}]</span></a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="widget widget-archives">
                    <h3 className="widget-title">热门文章</h3>
                    <ul>
                        <li>
                            <a href="#">November 2014</a>
                        </li>
                        <li>
                            <a href="#">September 2014</a>
                        </li>
                        <li>
                            <a href="#">January 2013</a>
                        </li>
                    </ul>
                </div>
                <div className="widget widget-category">
                    <h3 className="widget-title">文章分类</h3>
                    <ul>
                        {

                            this.state.category.map(function(item,key){
                                var link="/notes/home/list/"+item.id;
                                return(
                                    <li key={key}>
                                        <Link to={link}>{item.article_type}</Link>
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
