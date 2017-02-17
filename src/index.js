
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './css/public';
import './css/style';
//路由
import {Router,Route,IndexRoute,hashHistory,Link,browserHistory,IndexRedirect} from 'react-router';
//引入模块
import App from './components/main.js';
import Login from './components/login/login.js';
import {Management} from './components/management/index.js';
import {ArticleList} from './components/management/articleList.js';
import {ArticleDetail} from './components/management/articleDetail.js';
import {ArticlePush} from './components/management/articlePush.js';
import {ArticleEditor} from './components/management/articleEditor.js';


import {Home} from './components/home/home.js';
import {About} from './components/about/about.js';
import {HomeArticleMain} from './components/home/article/articleMain.js';
import {HomeArticleList} from './components/home/article/articleList.js';
import {HomeArticleDetails} from './components/home/article/articleDetails.js';
//reflux引入
import actions from './actions/manageAction';
import appStores from './stores/manageStores';


var routes=<Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path='admin'   component={Management}>
                    <Route path="articlelist"  component={ArticleList}/>
                    <Route path="article/:id"  component={ArticleDetail}/>
                    <Route path="editor/:id"   component={ArticleEditor}/>
                    <Route path="push"   component={ArticlePush}/>
                    <IndexRedirect to="/admin/articlelist" />
                </Route>
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="login" component={Login}  />
                <Route path="notes" component={HomeArticleMain}>
                    <Route path="list/:type" component={HomeArticleList}/>
                    <Route path="article/:id" component={HomeArticleDetails}/>
                </Route>
              </Route>;
ReactDOM.render((
    <Router history={browserHistory} routes={routes} />
), document.getElementById('helloWeek'))
//<IndexRedirect to="/home" />

//<Route path="*" component={Home}/>