
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router'
import './css/public';
import './css/style';
import './css/custom'
import {routes} from './app.route.js'

ReactDOM.render((
    <Router history={browserHistory} routes={routes} />
), document.getElementById('helloWeek'))
//<IndexRedirect to="/home" />

