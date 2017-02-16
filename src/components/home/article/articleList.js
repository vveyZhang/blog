import React from 'react';

export class HomeArticleList extends React.Component{

    render(){
        return(
            <div>
                <div className="post post-1">
                    <div className="entry-header">
                        <h1 className="entry-title">
                            <a href="single.html">Adaptive Vs. Responsive Layouts And Optimal Text Readability</a>
                        </h1>
                        <div className="entry-meta">
                            <span className="post-category"><a href="#">Web Design</a></span>

                            <span className="post-date"><a href="#">February 2, 2013</a></span>

                            <span className="post-author"><a href="#">Albert Einstein</a></span>

                            <span className="comments-link"><a href="#">4 Comments</a></span>
                        </div>
                    </div>
                    <div className="entry-content clearfix">
                        <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                        <div className="read-more cl-effect-14">
                            <a href="#" className="more-link">Continue reading <span className="meta-nav">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}