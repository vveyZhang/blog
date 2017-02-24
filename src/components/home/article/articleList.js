import React from 'react';
import {HomeArticleItem} from './articleItem.js'
import $ from 'jquery'
export class HomeArticleList extends React.Component{
    state={
        typeId:this.props.params.type,
        articleList:[],
        page:1,
        nothing:false,
        loading:false,
        ready:false
    };
    componentDidMount(){
        var that=this;
        $.ajax({
            type:'get',
            url:'/handle/home/findtype',
            data:{
                page:that.state.page,
                typeId:that.state.typeId
            }
        }).then(data=>{

            if(data.length==0){
                this.setState({
                    nothing:true
                });
                return;
            }
            that.setState({
                articleList:data,
                ready:true
            })
        }).catch(err=>console.log(err));
        $(window).on('scroll',function(){
            if(!that.state.ready)return; //页面数据加载我完成
            if(that.state.nothing)return;//如果页面没有数据
            var ch=$(window).height();
            var dh=$(document).height();
            var top=$(window).scrollTop();
            if(top+ch>=dh){
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
    componentWillReceiveProps(nextProps){
        $.ajax({
            type:'get',
            url:'/handle/home/findtype',
            data:{
                page:1,
                typeId:nextProps.params.type
            }
        }).then(data=>{
            if(data.length==0)this.setState({
                nothing:true
            });
            this.setState({
                articleList:data
            })
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div className='padding-b'>
                <p  style={{display:this.state.nothing?'block':'none'}} className='nothing'>没与相关文章</p>
                {
                    this.state.articleList.map((item,key)=>{
                        return(
                            <HomeArticleItem article={item} key={key}></HomeArticleItem>
                        )
                    })
                }
                <div className="loading-box" style={{display:this.state.loading?'block':'none'}}>
                    <img src="http://www.vveyzhang.com/images/loading.gif" width="100" height="20" alt=""/>
                </div>
            </div>
        )
    }
}