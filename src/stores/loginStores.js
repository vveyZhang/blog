import Reflux from 'reflux';

import {loginAction} from '../actions/loginAction.js';

const loginInfor={
    url:null,
    isErr:false,
    errorInfor:'',
    userName:'',
    isPWErr:false,
    userPw:'',
    loginErr:false,
    loginTips:false

};

export const loginStore =Reflux.createStore({
    init(){
        this.listenToMany(loginAction);
    },
    onGetUrl(url){
        this.url=url;
        this.trigger(loginInfor)
    },
    onClearUrl(){
        this.url=null;
        this.trigger(loginInfor)
    },
    onLoginFail(){
        loginInfor.loginErr=true;
        this.trigger(loginInfor.loginErr)

    },
    onChangeUser(name){
        loginInfor.userName=name;
        loginInfor.loginTips=false;
        if(name.length==0){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名不能为空";
            this.trigger(loginInfor);
            return;
        }
        if(name.length<4||name.length>20){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名不能大于20或小于4个字符串";
            this.trigger(loginInfor);
            return;
        }
        var regE="^[a-zA-Z]+$";
        var re = new RegExp(regE);
        var result=re.test(name);
        if(!result){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名只能为字母";
            this.trigger(loginInfor)
            return;
        }
        loginInfor.isErr=false;
        loginInfor.errorInfor='';
        this.trigger(loginInfor);


    },
    onChangePw(pw){
        loginInfor.userPw=pw;
        loginInfor.loginTips=false;
        if(pw.length==0){
            loginInfor.isPWErr=true
        }else{
            loginInfor.isPWErr=false;
        };
        this.trigger(loginInfor)
    },
    onIsComplete(){
        if(loginInfor.userName==""||loginInfor.userPw=="")
            loginInfor.loginTips=true;
        else
            loginInfor.loginTips=false;

        this.trigger(loginInfor)
    },
    getLogin(){
        return loginInfor;
    }
});


