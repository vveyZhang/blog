import React from 'react';
import {homeAction} from '../../../actions/homeAction.js'
export class AllHeader extends React.Component{
    render(){
        return(
            <div className="all-article-header">
                <div className="all-article-icon" onClick={homeAction.toggle}></div>
            </div>
        )
    }
}
