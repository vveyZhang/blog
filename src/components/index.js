import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import appStores from '../stores/manageStores';
import actions from '../actions/manageAction';
var  App=React.createClass({
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

