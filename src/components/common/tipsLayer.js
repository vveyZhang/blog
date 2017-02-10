import React,{Component} from'react';

export  class TipsLayer extends React.Component{
    render(){
        return(
            <div className="layer-container" style={{display:this.props.tips?'block':'none'}} >
                <div className="layer-tips-box">
                    <p className="tips-content">{this.props.tips}</p>
                    <div className="layer-tips-btn">
                        <span onClick={this.props.toggle}>确定</span>
                    </div>
                </div>

            </div>
        )
    }
}
