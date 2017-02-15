import React from 'react';
import {AllHeader} from './allHeader.js'
import {ArticlePreview} from './articlePreview.js';
import $ from 'jquery'

export class AllArticle extends React.Component{
    state={
        page:1,
        articles:[],
        loading:false
    };
    componentDidMount(){
        var that=this;
        $.ajax({
            type:'get',
            url:'/handle/home/find',
            success:function(data){
                that.setState({
                    articles:data
                })
            },
            error:function(err){
                console.log(err)
            }
        });
        var that=this;
        $(window).on('scroll',function(){
            var ch=$(window).height();
            var dh=$(document).height();
            var top=$(window).scrollTop();
            if(top+ch==dh){
                that.setState({
                    loading:true
                })
                that.setState({
                    page:that.state.page++
                });
                $.ajax({
                    type:'get',
                    url:'/handle/home/find',
                    success:function(data){
                        var articles=data;
                        for (let article of that.state.articles){
                            articles.push(article)
                        }
                        setTimeout(function(){
                            that.setState({
                                articles:articles,
                                loading:false
                            })
                        },500)
                    },
                    error:function(err){
                        console.log(err)
                    }
                });
            }
        })
    }
    componentWillUnmount() {
        $(window).off('scroll');
    };
    render(){
        return(
            <div className="AllArticle-main">
                <AllHeader ></AllHeader>
                <div className="AllArticle-content" >
                    {
                        this.state.articles.map((article,key)=>{

                            return(
                                <ArticlePreview article={article} key={key}></ArticlePreview>
                            )
                        })
                    }

                </div>
                <div className="loading" style={{display:this.state.loading?'block':'none'}}>
                    <img src="http://www.vveyzhang.com/images/loading.gif" width="100" height="20" alt=""/>
                </div>
            </div>
        )
    }
}
