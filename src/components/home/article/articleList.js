import React from 'react';
import {HomeArticleItem} from './articleItem.js'
import $ from 'jquery'
export class HomeArticleList extends React.Component{
    state={
        typeId:this.props.params.type,
        articleList:[],
        page:1,
        nothing:false,
        loading:false
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
            if(data.length==0)this.setState({
                nothing:true
            });
            that.setState({
                articleList:data
            })
        }).catch(err=>console.log(err));
        $(window).on('scroll',function(){
            var ch=$(window).height();
            var dh=$(document).height();
            var top=$(window).scrollTop();
            if(top+ch==dh){
                if(that.state.nothing)return
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
            console.log(data)
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