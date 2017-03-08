/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
import $ from 'jquery'
import {browserHistory} from 'react-router'
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import {loginAction} from '../../actions/loginAction';
import {loginStore} from '../../stores/loginStores';

//用户名输入input
  var LoginName=React.createClass({
    handleChange:function(e){
      var e=e||event;
      loginAction.changeUser(e.target.value)
    },
    render:function(){
      return(<div className='userName'>
              <input  type="text"  min='4' max='20' placeholder='请输入用户名' onChange={this.handleChange} ref="userInput" />
            </div>
    )
  }
});
// 用户密码
  var LoginPassword=React.createClass({
    handleChange: function (e) {
      var e=e||event;
      loginAction.changePw(e.target.value)
    },
    render: function () {
      return(
          <div className='user-password' >
            <input type="password"  onChange={this.handleChange}  placeholder='请输入密码'  ref='userInput' autoComplete="off"/>
          </div>
      )
    }
  });
//用户登录
var  Login=React.createClass({
  getInitialState:function(){
    return{
      login:loginStore.getLogin()
    }
  },
  signIn:function(){
    loginAction.isComplete()
    if(this.state.login.isErr)return;
    if(this.state.login.loginTips)return;
    var _this=this;
    $.ajax({
      url: "/manage/login",
      type: "POST",
      data: {
        username: this.state.login.userName,
        userpw: this.state.login.userPw
      },
      success:function(data){
        if(!data.status){
          loginAction.loginFail();
          return;
        }
        if(_this.state.login.url==null){
          browserHistory.replace('/admin/articlelist');
          return;
        }
        browserHistory.replace(_this.state.login.url);
        loginAction.clearUrl()
      },
      error:function(data,stauts,e){
        alert('系统错误');
        console.log(data);
      }
    });
  },
   handleClick: function () {

     this.signIn()

   },
   handleKeydown: function (e) {
     var e = e || window.event;
     if(e.keyCode==13){
       this.signIn()

     }
   },
   render: function () {
     return(
         <div id="login"  className=''>
             <div className='user-login' onKeyDown={this.handleKeydown}>
               <div className="user-login-title">
                 <p>登录</p>
               </div>
               <div className="user-login-warp">
                 <div className="user-login-warp">
                   <LoginName  />
                   <div className='username-tip' style={{display:this.state.login.isErr?'block':'none'}}>
                     <p>{this.state.login.errorInfor}</p>
                   </div>
                   <LoginPassword/>
                   <div className='username-tip' style={{display:this.state.login.isPWErr?'block':"none"}}>
                     <p>密码不能为空</p>
                   </div>
                   <div className="login-error" style={{display:this.state.login.loginErr?'block':'none'}}>

                     <p>账号或密码错误</p>
                   </div>
                   <div className="login-error" style={{display:this.state.login.loginTips?'block':'none'}}>
                     <p>请补充完整信息</p>
                   </div>
                   <bottun className='login-btn' onClick={this.handleClick}>登录</bottun>
                 </div>
               </div>
               <div className="register-tip">
                 <p>目前没开放注册功能</p>
               </div>
             </div>
         </div>

     )
   }
 });

ReactMixin.onClass(Login, Reflux.connect(loginStore,'login'));
module.exports=Login;