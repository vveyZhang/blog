import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {hashHistory,Link} from 'react-router';
import appStores from '../stores/manageStores';
import actions from '../actions/manageAction';
var  App=React.createClass({
    //getInitialState:function(){
    //    return{
    //        time:1,
    //    }
    //},
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    render: function () {
        return(
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
});

module.exports = App;

