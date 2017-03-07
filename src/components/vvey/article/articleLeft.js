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
            console.log(data)
            this.setState({
                category:data.category?data.category:[],
                newest:data.newest?data.newest:[]
            })

        }).catch(err=>console.log(err));
        $.ajax({
            url:"http://api.duoshuo.com/sites/listTopThreads.jsonp",
            type:'get',
            dataType:'jsonp',
            data:{
                short_name:'vveyblog',
                range:'all'
            }
        }).then(data=>{
            this.setState({
                hot:data.response?data.response:[]
            })
        }).catch(err=>console.log(err))
    }
    render(){
        var host=window.location.host;
        return(
            <div style={{'paddingLeft':'25px'}}>
                <div className="widget widget-recent-posts">
                    <h3 className="widget-title">最新文章</h3>
                    <ul>
                        {
                            this.state.newest.map(function(item,key){
                                var link="http://"+host+"/home/article/"+item.id;
                                return(
                                    <li key={key}>
                                        <a href={link}>{item.article_title} <span>[{item.views}] views</span></a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="widget widget-archives" style={{display:this.state.hot.length==0?"none":"block"}}>
                    <h3 className="widget-title">热门文章</h3>
                    <ul>
                        {
                            this.state.hot.map(function(item,key){
                                var link="http://"+host+"/home/article/"+item.thread_key;
                                return(
                                    <li key={key}>
                                        <a href={link}>{item.title} <span>[{item.comments}] comments</span></a>
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
