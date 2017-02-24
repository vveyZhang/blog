import React from 'react';
import $ from 'jquery';
import {CheckBox} from '../common/checkBox.js';
import {ArticleSelect} from '../common/articleSelect.js';
import {Page} from '../common/articlePage.js';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import {manageAction} from '../../actions/manageAction.js';
import {manageStore} from '../../stores/manageStores.js'
import {TipsLayer} from '../common/tipsLayer.js';
import {WarnLayer} from '../common/warnLayer.js';

export class ArticleList extends React.Component{

    state={
        currentCategory:'all',
        tips:null,
        warn:null
    };
    componentDidMount() {
        this.goRender();
    }
    //刷新数据，设置 Store中初始数据
    goRender(type="all",page=1){
        $.ajax({
            type:'get',
            url:"/manage/admin/find",
            data:{
                type:type,
                page:page
            },
            success:function(data){
                if(data.status!=undefined){
                    return;
                }
                manageAction.setList(data)
            },
            error:function(error){
                console.log(error)
            }
        })
    }
    //翻页
    goPage=(page=1)=>{
        this.goRender(this.state.currentCategory,page)
    }
    //文章类型筛选
    changeCategory=(gory)=>{
        this.setState({
            currentCategory:gory
        });
        this.goRender(gory)
    };
    //清除提示
    clearTips=()=>{
        this.setState({
            tips:null
        })
    };
    //取消删除
    cancelArticle=()=>{
        this.setState({
            warn:null
        })
    };
    //确认删除
    confirmArticle=()=>{

        var id=this.state.listArticle.checkedId.join(',');
        var that=this;
        $.ajax({
            type:'post',
            url:"/manage/admin/delete",
            data:{
                id:id
            },
            success:function(data){
                if(data){
                    that.setState({
                        tips:'删除成功',
                        warn:null
                    });
                    location.reload()
                }
            },
            error:function(error){
                that.setState({
                    tips:'删除失败',
                    warn:null
                });
                console.log(error)
            }
        })
    };
    //执行删除操作
    deleteArticle=()=>{
        this.setState({
            warn:'删除后不能恢复，是否继续删除'
        });
    }

    render(){
        var articles=[],category=[];
        if(!this.state.listArticle)return(<div></div>);
        articles=this.state.listArticle.articles.articles;
        category=this.state.listArticle.articles.type;
        var pageInfor=this.state.listArticle.articles;
        var that=this;
        return (
            <div className="article-list">
                <TipsLayer tips={this.state.tips} toggle={this.clearTips}></TipsLayer>
                <WarnLayer warn={this.state.warn} confirm={this.confirmArticle} cancel={this.cancelArticle}></WarnLayer>
                <div className="article-tool">
                    <div className="article-tool-check article-check"><CheckBox checked={this.state.listArticle.all} checkEvent={manageAction.toggleAll}></CheckBox><p className="checked-label noselect">全选</p></div>
                    <div className="article-select"><ArticleSelect  select={category} changeLabel={this.changeCategory} ></ArticleSelect></div>
                    <div className="delete-btn" onClick={this.deleteArticle}></div>
                </div>
                <div className="article-list-content">
                    {articles.map(function(article,key){
                        article.time=article.time.substring(0,10);
                        if(article.checked==undefined)article.checked=false;
                        var link='/admin/article/'+article.id;
                        return(
                            <div className="article-list-row" key={key}>
                                <div className="article-check article-item-check"><CheckBox articleId={article.id} checked={article.checked} checkEvent={manageAction.toggleId}></CheckBox><p className="checked-label noselect">勾选</p></div>
                                <p className="article-item-time">{article.time}</p>
                                <p className="article-item-title"><span className="title-type">{article.article_type}</span><a href={link}>{article.article_title}</a></p>
                            </div>
                        )

                    })}
                </div>
                <Page  toPage={this.goPage}  pageInfor={pageInfor}></Page>
            </div>
        )
    }
}
ReactMixin.onClass(ArticleList, Reflux.connect(manageStore,'listArticle'));
