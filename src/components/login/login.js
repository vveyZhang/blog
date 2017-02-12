/**
 * Created by helloxwz on 2016/3/1.
 */
import React from 'react';
//import ReactDOM from 'ReactDOM';
import $ from 'jquery'
import {browserHistory} from 'react-router'
//  用户登录信息
  var userInfor={
  userName:'',
  userNameState:false,
  userPassword:'',
  userPasswordState:false
};
//用户名输入input
  var LoginName=React.createClass({
    getInitialState:function(){
    return{
      error:'none',
      value:'',
      inforError:''
    }
  },
    componentDidMount: function () {
      this.refs.userInput.blur();
    },
    handleBlur:function(e){
      var e=e||event;
      var value=e.target.value;
      if(value.length==0){
        this.setState({
          error:'block',
          inforError:'用户名不能为空'
        })
        return;
      }
      var regE="^[a-zA-Z]+$";
      var re = new RegExp(regE);
      var result=re.test(value);
      var valueLength=/^[a-zA-Z]+$/;
      if(value.length<4||value.length>20){
        this.setState({
          error:'block',
          inforError:'用户名不能大于20或小于4个字符串'
        });
        return;
      }
      if(result){
        this.setState({
          error:'none'
        });
        userInfor.userNameState=true;
      }else{
        this.setState({
          error:'block',
          inforError:'用户名只能为英文'
        })
      }
  },
    handleBind:function(e){
      this.props.inputFocus();
    var e=e||event;
    this.setState({
      error:'none',
      value:e.target.value
    });
      userInfor.userName=e.target.value;
      var value=e.target.value;
      if(value.length==0){
        this.setState({
          error:'block',
          inforError:'用户名不能为空'
        })
        return;
      }
      var regE="^[a-zA-Z]+$";
      var re = new RegExp(regE);
      var result=re.test(value);
      var valueLength=/^[a-zA-Z]+$/;
      if(value.length<4||value.length>20){
        this.setState({
          error:'block',
          inforError:'用户名不能大于20或小于4个字符串'
        });
        return;
      }
      if(result){
        this.setState({
          error:'none'
        });
        userInfor.userNameState=true;
      }else{
        this.setState({
          error:'block',
          inforError:'用户名只能为英文'
        })
      }
  },
    handleFocus:function(){
      this.setState({
        error:'none'
      });
    },
    render:function(){
      return(<div className='userName'>
              <input  type="text"  min='4' max='20' placeholder='请输入用户名' value={this.state.value} onChange={this.handleBind} onBlur={this.handleBlur} onFocus={this.handleFocus} ref="userInput" />
              <div className='username-tip' style={{display:this.state.error}}>
                    <p>{this.state.inforError}</p>
              </div>

            </div>
    )
  }
});
// 用户密码
  var LoginPassword=React.createClass({
    getInitialState:function(){
      return{
        userPassword:''
      }
    },
    handleChange: function (e) {
      this.props.inputFocus();
      var e=e||event;
      this.setState({
        userPassword:e.target.value
      });
      userInfor.userPassword=e.target.value;
      if(userInfor.userPassword==''){
        userInfor.userPasswordState=false;
      }
      userInfor.userPasswordState=true;
    },
    componentDidMount: function () {
      this.refs.userInput.blur();
    },
    handleBluer: function (e) {
      var e=e||event;
      this.setState({
        userPassword:e.target.value
      });
      userInfor.userPassword=e.target.value;
      if(userInfor.userPassword==''){
        userInfor.userPasswordState=false;
      }
      userInfor.userPasswordState=true;
    },
    render: function () {
      return(
          <div className='user-password' >
            <form action="" >
            </form>
            <input type="password"  value={this.state.userPassword} onChange={this.handleChange}  placeholder='请输入密码' ref='userInput' onBlur={this.handleBluer} autoComplete="off"/>
          </div>
      )
    }
  });
//用户登录
var  Login=React.createClass({
   getInitialState:function(){
     return{
       loginState:true
     }
   },
   inputFocus: function () {
     this.setState({
       loginState:true
     })
   },
   handleClick: function () {
     if(userInfor.userNameState==false||userInfor.userPasswordState==false) return;
     var _this=this;
     $.ajax({
       url: "/manage/login",
       type: "POST",
       data: {
         username: userInfor.userName,
         userpw: userInfor.userPassword
       },
       success:function(data){
         if(!data.status){
           _this.setState({
             loginState:false
           });
           return;
         }
         browserHistory.replace('/admin/articlelist')
       },
       error:function(data,stauts,e){
         alert('系统错误')
         console.log(data);
       }
     });
   },
   handleKeydown: function (e) {
     var e = e || window.event;
     if(e.keyCode==13){
       if(userInfor.userNameState==false||userInfor.userPasswordState==false) return;
       var _this=this;
       $.ajax({
         url: "/manage/login",
         type: "POST",
         data: {
           username: userInfor.userName,
           userpw: userInfor.userPassword
         },
         success:function(data){
           if(!data.status){
             _this.setState({
               loginState:false
             });
             return;
           }
           browserHistory.replace('/admin/articlelist')
         },
         error:function(data,stauts,e){
           alert('系统错误');
           console.log(data);
         }
       });
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
                   <LoginName  inputFocus={this.inputFocus} />
                   <LoginPassword inputFocus={this.inputFocus} />
                   <div className="login-error" style={{display:this.state.loginState?'none':'block'}}>
                     <p>账号或密码错误</p>
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
module.exports=Login;