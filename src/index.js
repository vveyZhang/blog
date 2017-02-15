
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//路由
import {Router,Route,IndexRoute,hashHistory,Link,browserHistory,IndexRedirect} from 'react-router';
//引入模块
import App from './components/main.js';
import {Home} from './components/home/home.js';
import Login from './components/login/login.js';
import {Management} from './components/management/index.js';
import {ArticleList} from './components/management/articleList.js';
import {ArticleDetail} from './components/management/articleDetail.js';
import {ArticlePush} from './components/management/articlePush.js';
import {ArticleEditor} from './components/management/articleEditor.js';
import {AllArticle} from './components/home/allArticle/allArticle.js';
import {ArticleDetails} from './components/home/articleDetail/articleDetail.js';
//flux引入
import actions from './actions/manageAction';
import appStores from './stores/manageStores';
//<Route path="item" component={ActivityItem}/>

//function jumpVal(nextState,replace) {
//    $.ajax({
//        url: "/manage/val",
//        type: "POST",
//        async: false,
//        success: function (data) {
//            if (!data.status) {
//                browserHistory.replace('/login');
//            }
//            ;
//        },
//        error: function (data, stauts, e) {
//            browserHistory.replace('/login');
//        }
//    });
//};
var routes=<Route path="/" component={App}>
                <Route path='admin'   component={Management}>
                    <Route path="articlelist"  component={ArticleList}/>
                    <Route path="article/:id"  component={ArticleDetail}/>
                    <Route path="editor/:id"   component={ArticleEditor}/>
                    <Route path="push"   component={ArticlePush}/>
                    <IndexRedirect to="/admin/articlelist" />
                </Route>
                <Route path="login" component={Login}  />
                <Route path="home" component={Home}>
                    <Route path="all" component={AllArticle}/>
                    <Route path="article/:id" component={ArticleDetails}/>
                    <IndexRedirect to="/home/all" />
                </Route>
                <IndexRedirect to="/home" />
                <Route path="*" component={Home}/>
              </Route>;
ReactDOM.render((
    <Router history={browserHistory} routes={routes} />
), document.getElementById('helloWeek'))


