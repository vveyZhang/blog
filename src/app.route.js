import React from 'react';
import ReactDOM from 'react-dom';

//路由
import {Route,IndexRoute,Link,IndexRedirect } from 'react-router';
//引入模块
import App from './components/index.js';
import Login from './components/login/login.js';
import {Management} from './components/management/index.js';
import {ArticleList} from './components/management/articleList.js';
import {ArticleDetail} from './components/management/articleDetail.js';
import {ArticlePush} from './components/management/articlePush.js';
import {ArticleEditor} from './components/management/articleEditor.js';

import {Vvey} from './components/vvey/index.js'
import {Home} from './components/vvey/home.js'
import {About} from './components/vvey/about.js'
import {ArticleType} from './components/vvey/article/articleType.js'
import {HomeArticleDetails} from './components/vvey/article/articleDetails.js'
import {ArticleSearch} from './components/vvey/article/articleSearch.js'
import {NotFound} from './components/404Page.js'

export const routes=<Route path="/" component={App}>
    <IndexRoute component={Vvey} />
    <Route path='admin'   component={Management}>
        <Route path="articlelist"  component={ArticleList}/>
        <Route path="article/:id"  component={ArticleDetail}/>
        <Route path="editor/:id"   component={ArticleEditor}/>
        <Route path="push"   component={ArticlePush}/>
        <IndexRedirect to="/admin/articlelist" />
    </Route>
    <Route path="login" component={Login}  />
    <Route path="/" component={Vvey} >
        <Route path="home" component={Home}>
            <Route path="type/:id" component={ArticleType} />
            <Route path="article/:id" component={HomeArticleDetails} />
            <Route path="search/:keyword" component={ArticleSearch} />
        </Route>
        <Route path="about"  component={About} />
    </Route>
    <Route path="notFound" component={NotFound}/>
    <Route path="*" component={NotFound}/>
</Route>;
