import React from 'react';

export class ArticlePreview extends React.Component{
    render(){
        return(
            <div className="articlePreview">
                <h1 className="articlePreview-title"><a href="">jquery基础教学</a></h1>
                <div className="articlePreview-content">
                    《轴线与网格》里主要讲述了grid与flex中，网格与轴线的基本概念，了解了这些基本概念之后，我们可以更轻松地对布局方式进行研究，这一篇文章主要描述flex布局中，定义在容器与项目的相关属性。
                    本篇文章是依据我个人的所学所知，且部分参考国内外优秀的flex布局的相关文献总结而得。
                </div>
                <div className="articlePreview-tool">
                    <p className="articlePreview-number">（ 0 ）</p>
                    <a className="articlePreview-read" href="">阅读</a>
                </div>
            </div>
        )
    }
}