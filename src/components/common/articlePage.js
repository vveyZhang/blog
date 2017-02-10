import React from 'react';
import {manageStore} from '../../stores/manageStores.js'
export class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:this.props.pageInfor.current
        }
    }
    goPage(page){
        this.props.toPage(page)
    }
    render(){
        var pagesEnd=10,pagesStart=1,pagesArray=[],current=this.props.pageInfor.current;
        if(this.props.pageInfor.pages<=10){
            pagesEnd=this.props.pageInfor.pages
        }else{
            if(current%10==0){
                pagesEnd=current;

            }else{
                pagesEnd=Math.ceil(current/10)*10
            }
            pagesStart=pagesEnd-9;
        };
        for(var i=pagesStart;i<=pagesEnd;i++){
            pagesArray.push(i)
        }
        return(
            <div className="article-list-page" >
                <a onClick={this.goPage.bind(this,current-1)} href="javascript:void(0)" className="article-page-quick" style={{display:current==1?'none':'inline-block'}}>上一页</a>
                <div className="article-page-number">
                    {
                        pagesArray.map((number,key)=>{
                            return(
                                <a onClick={this.goPage.bind(this,number)} href="javascript:void(0)" key={key} className={number==current?'cur':''}>{number}</a>
                                )

                     })
                    }
                </div>
                <a href="javascript:void(0)"  onClick={this.goPage.bind(this,current+1)} className="article-page-quick" style={{display:current==this.props.pageInfor.pages?'none':'inline-block'}} >下一页</a>
</div>
        )
    }
}