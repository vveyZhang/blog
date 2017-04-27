import React from 'react';
import {HomeArticleItem} from './articleItem.js'
import $ from 'jquery'
export class ArticleContainer extends React.Component{
    state={
        articleList:[],
        url:"/handle/home/find",
        page:1,
        nothing:false,
        loading:false,
        ready:false,
        noMore:false
    };
    componentDidMount(){
        this.getArticles();
        var that=this;
        $(window).on('scroll',()=>{
            if(!this.state.ready)return; //页面数据加载未完成
            if(this.state.nothing)return;//如果页面没有数据
            if(this.state.loading)return;//如果在加载数据
            if(this.state.noMore)return;//如果在加载数据
            let ch=$(window).height();
            let dh=$(document).height();
            let top=$(window).scrollTop();
            if(top+ch+10>=dh){
                this.setState({
                    loading:true,
                    page:this.state.page+1
                });
                this.getArticles();
            }

        })
    }
    componentWillUnmount() {
        $(window).off('scroll');
    };
    componentWillReceiveProps(nextprops){
        this.getArticles(nextprops);
    };
    getArticles(props=this.props){
        let data={
            page:this.state.page
        };
        var that=this;
        if(props.typeId){
            this.setState({
                url:"/handle/home/findtype"
            });
            data.typeId=props.typeId
        }else{
            data.keyword=props.keyword
        }
        $.ajax({
            url:this.state.url,
            type:'get',
            data:data
        }).then(data=>{
            if(data.length==0){
                if(this.state.page==1){
                    that.setState({
                        nothing:true,
                        articleList:[]
                    });
                }else{
                    that.setState({
                        noMore:true,
                        loading:false,
                        page:that.state.page-1
                    });
                }
                return;
            }
            let articles=that.state.articleList;

            articles.push.apply(articles,data);
            setTimeout(function(){
                that.setState({
                    articleList:articles,
                    loading:false,
                    ready:true
                })
            },300);
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
                            <HomeArticleItem keyword={this.props.keyword} article={item} key={key}></HomeArticleItem>
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
