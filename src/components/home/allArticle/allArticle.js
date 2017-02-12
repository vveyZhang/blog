import React from 'react';
import {AllHeader} from './allHeader.js'
import {ArticlePreview} from './articlePreview.js';
import $ from 'jquery'

export class AllArticle extends React.Component{
    state={
        page:1,
        articles:[]
    };
    componentDidMount(){
        var that=this;
        $.ajax({
            type:'get',
            url:'/handle/home/find',
            success:function(data){
                console.log(data)
                that.setState({
                    articles:data
                })
            },
            error:function(err){
                console.log(err)
            }
        })
    }
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

            </div>
        )
    }
}
