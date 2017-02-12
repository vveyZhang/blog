import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router'
export class ArticleDetail extends React.Component{
    state={
        title:'',
        content:'',
        headerTop:'0px'
    }
    componentDidMount(){
        this.getArticle();
        $(window).on('scroll',(e)=>{
            this.setState({
                headerTop:$(window).scrollTop()+'px'
            })
        })
    };

    componentWillUnmount() {
        $(window).off('scroll');
    };

    getArticle=(e)=>{
        $.ajax({
            url:"/manage/admin/details/"+this.props.params.id,
            type:'get',
            dataType:'json'
        }).then(json=>{
            if(json==null){
                browserHistory.replace('/admin/articlelist');
                return
            }
            this.setState({
            title:json.article_title,
            content:json.article_content

        })}).catch(function(err){
            console.log(err)
        });
    };
    deleteArticle=(e)=>{
       let id=this.props.params.id;
        $.ajax({
            type:'get',
            url:'/manage/admin/delete',
            data:{
                id:id.toString()
            }
        }).then(data=>{
            if(data[0].status){
                browserHistory.replace('/admin/articlelist')
            }

        }).catch(error=>console.log(error))
    }
    toEditor=(e)=>{
        browserHistory.replace('/admin/editor/'+this.props.params.id)
    }
    render(){
        return(
            <div className="articleDetail-main">
                <div className="articleDetail-tool" style={{top:this.state.headerTop}}>
                    <p className="articleDetail-tool-btn"><span onClick={this.deleteArticle}>删除</span><span onClick={this.toEditor}>编辑</span></p>
                    <h1 className="articleDetail-title">{this.state.title}</h1>
                </div>
                <div className="articleDetail-content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </div>
        )
    }
}