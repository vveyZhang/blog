import React,{Component} from'react';

export  class WarnLayer extends React.Component{
    render(){
        return(
            <div className="layer-container" style={{display:this.props.warn?'block':'none'}} >
                <div className="layer-tips-box">
                    <p className="tips-content">{this.props.warn}</p>
                    <div className="layer-tips-btn">
                        <span onClick={this.props.confirm}>确定</span>
                        <span onClick={this.props.cancel}>取消</span>
                    </div>
                </div>

            </div>
        )
    }
}
