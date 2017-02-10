import React from 'react';
import $ from 'jquery';

export class ArticleSelect extends React.Component{

    state = {
        select:'全部',
        category:this.props.select,
        show:false
    };
    clickSelect=(item)=> {
        this.setState({
            select: item
        });
        if (item == "全部") item = 'all';
        this.props.changeLabel(item);
    };
    componentDidMount(){
        let _this=this;
        $('body').on('click',function(e){
            var e=e||event;
            if($(e.target).parents('.select-box').length!=0){
                _this.showList()
                return;
            }
            _this.setState({
                show:false
            })
        });

    };
    componentWillUnmount(){
        $('body').off('click');
    }
    showList=(e)=>{
      this.setState({
          show:!this.state.show
      })
    };
    render(){
        let _this=this;
        return (
            <div className="select-box" ref="select">
                <p className="select-label" >{this.state.select}</p>
                <ul className="select-list" style={{display:this.state.show?'block':'none'}}>
                    <li onClick={this.clickSelect.bind(this,'全部')} style={{display:this.state.select=='全部'?'none':'block'}}>全部</li>
                    {
                        this.state.category.map(function(item,key){
                            return(
                                <li onClick={_this.clickSelect.bind(_this,item.article_type)} key={key}>{item.article_type}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
