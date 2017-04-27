import React from 'react';
import {HomeArticleItem} from './articleItem.js'
import $ from 'jquery'
export class ArticleContainer extends React.Component{
    state={
        articleList:[],
        page:1,
        nothing:false,
        loading:false,
        ready:false
    };
    componentDidMount(){
        this.getArticles();
        $(window).on('scroll',()=>{
            setTimeout(()=>this.turnPage,20)
        })
    }
    turnPage=(e)=>{
        if(!this.state.ready)return; //页面数据加载未完成
        if(this.state.nothing)return;//如果页面没有数据
        if(this.state.loading)return;//如果在加载数据
        let ch=$(window).height();
        let dh=$(document).height();
        let top=$(window).scrollTop();
        if(top+ch+10>=dh){
            this.setState({
                loading:true,
                page:this.state.page+1
            });
            let url='/handle/home/find',data={
                page:this.state.page
            };
            if(this.props.typeId){
                url='/handle/home/findtype';
                data.typeId=this.props.typeId
            }else{
                data.keyword=this.props.keyword
            }
            let that=this;
            $.ajax({
                type:'get',
                url:url,
                data:data,
                success:function(data){
                    let articles=that.state.articleList;
                    if(data.length==0){
                        that.setState({
                            page:that.state.page-1
                        })
                    }
                    for (let article of data){
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

    }
    componentWillUnmount() {
        $(window).off('scroll');
    };
    componentWillReceiveProps(nextprops){
        this.getArticles(nextprops);
    };
    getArticles(props=this.props){
        let url='/handle/home/find',data={
            page:1
        };
        if(props.typeId){
            url='/handle/home/findtype';
            data.typeId=props.typeId
        }else{
            data.keyword=props.keyword
        }
        $.ajax({
            url:url,
            type:'get',
            data:data
        }).then(data=>{
            if(data.length==0){
                this.setState({
                    nothing:true,
                    articleList:[]
                });
                return;
            }
            this.setState({
                articleList:data,
                ready:true
            })
        }).catch(err=>{
            this.setState({
                nothing:true,
                articleList:[]
            });
            console.log(err);
        })
    }
    render(){
        return(
            <div>
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
