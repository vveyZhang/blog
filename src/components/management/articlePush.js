import React from 'react';
import $ from 'jquery';
import {TipsLayer} from "../common/tipsLayer.js"
import {browserHistory} from 'react-router';
var editor;
export class ArticlePush extends React.Component{
    componentDidMount(){
        editor=CKEDITOR.replace( 'editorArticle'       , {

            toolbar :
                [
                    ['Source','NumberedList','BulletedList','Outdent','Indent','Blockquote'],
                    //加粗     斜体，     下划线      穿过线      下标字        上标字
                    ['Bold','Italic','Underline','Strike','Subscript','Superscript'],
                    // 数字列表          实体列表            减小缩进    增大缩进
                    ['NumberedList','BulletedList','-','Outdent','Indent'],
                    //左对 齐             居中对齐          右对齐          两端对齐
                    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
                    //超链接  取消超链接 锚点
                    ['Link','Unlink'],
                    //图片    flash    表格       水平线            表情       特殊字符        分页符
                    ['Image','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
                    '/',
                    // 样式       格式      字体    字体大小
                    ['Styles','Format','Font','FontSize'],
                    ['lineheight'],
                    //文本颜色     背景颜色
                    ['TextColor','BGColor'],
                    //全屏           显示区块
                    ['Maximize','-']
                ]
        });
        let _this=this;
        editor.on( 'change', function(){
            _this.getEditor();
        })
    };
    state={
        editor:'',
        title:'',
        type:'',
        error:null,
        tips:null,
        isPending:false
    };
    getTitle=(e)=>{
        var e=e||event;
        this.setState({
            title:e.target.value
        });
    }
    getType=(e)=>{
        var e=e||event;
        this.setState({
            type:e.target.value
        });
    }
    getEditor=(e)=>{
        this.setState({
            editor:editor.getData()
        })
    }
    uploadArticle=(e)=>{
        if(this.state.isPending)return;
        if(this.state.title==""||this.state.type==""||this.state.editor==""){
            this.setState({
                error:'文章信息不完善，请继续填写'
            })
        };
        var that=this;
        this.setState({
            isPending:true
        });
        $.ajax({
            url:'/manage/admin/upload',
            type:'post',
            data:{
                title:that.state.title,
                type:that.state.type,
                content:that.state.editor
            },
            success:function(data){
                if(data[0].status){
                    that.setState({
                        tips:'上传成功',
                        isPending:false
                    })
                    setTimeout(function(){
                        browserHistory.replace('/admin/article/'+data[0].id)
                    },500)
                    return;
                }
                that.setState({
                    error:'上传失败,请刷新页面',
                    isPending:false
                })
            },
            error:function(error){
                that.setState({
                    error:'上传失败',
                    isPending:false
                })
            }
        })
    };
    hiddenTips=(e)=>{
        if(this.state.error){
            this.setState({
                error:null
            });
        }
    }
    render(){
        return(
            <div className="ArticleEditor">
                <TipsLayer tips={this.state.error||this.state.tips} toggle={this.hiddenTips} ></TipsLayer>
                <div className="ArticleEditor-title ArticleEditor-class"><input onChange={this.getTitle} type="text" placeholder="类别"/></div>
                <div className="ArticleEditor-title"><input type="text"  onChange={this.getType}  placeholder="请输入标题"/></div>
                <div className="ArticleEditor-content" dangerouslySetInnerHTML={{__html: this.state.editor}}></div>
                <div className="article-submit" onClick={this.uploadArticle}>提交</div>
                <textarea  className="ckeditor"  onChange={this.getEditor} id="editorArticle"></textarea>
            </div>
        )
    }
}