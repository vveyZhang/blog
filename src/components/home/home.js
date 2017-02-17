/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
import $ from 'jquery';
import {Header} from './header';
import {ArticleLfet} from './article/articleLeft.js'
import {HomeArticleItem} from './article/articleItem.js'
export class Home extends React.Component{
    state={
        keyword:this.props.location.query.keyword?this.props.location.query.keyword:null,
        articleList:[],
        page:1,
        loading:false,
        nothing:false
    };
    componentDidMount(){
        var that=this;
        $.ajax({
            type:'get',
            url:'/handle/home/find',
            data:{
                page:that.state.page,
                keyword:that.state.keyword
            }
        }).then(data=>{
            if(data.length==0)this.setState({
                nothing:true
            });
            this.setState({
                articleList:data
            })
        }).catch(err=>console.log(err));

        $(window).on('scroll',function(){
            var ch=$(window).height();
            var dh=$(document).height();
            var top=$(window).scrollTop();
            if(top+ch==dh){
                if(that.state.nothing)return;
                that.setState({
                    loading:true,
                    page:that.state.page+1
                });
                $.ajax({
                    type:'get',
                    url:'/handle/home/findtype',
                    data:{
                        page:that.state.page,
                        typeId:that.state.typeId
                    },
                    success:function(data){
                        var articles=data;
                        for (let article of that.state.articleList){
                            articles.push(article)
                        }
                        setTimeout(function(){
                            that.setState({
                                articleList:articles,
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
            <div>
                <Header></Header>
                <div className="home-main">
                    <div className="row">
                        <div className="col-md-9 padding-b" >
                            <p  style={{display:this.state.nothing?'block':'none'}} className='nothing'>没与相关文章</p>
                            {
                                this.state.articleList.map((item,key)=>{
                                  return(
                                      <HomeArticleItem key={key} article={item}></HomeArticleItem>
                                  )
                                })
                            }
                            <div className="loading-box" style={{display:this.state.loading?'block':'none'}}>
                                <img src="http://www.vveyzhang.com/images/loading.gif" width="100" height="20" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ArticleLfet></ArticleLfet>
                        </div>
                    </div>
                </div>
                <div id="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="copyright">&copy; 2017 vveyzhang.com  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}