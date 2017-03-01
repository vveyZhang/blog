import Reflux from 'reflux';

import {urlAction} from '../actions/urlAction.js';

const loginInfor={
    url:null,
    isErr:false,
    errorInfor:'',
    userName:'',
    isPWErr:false,
    userPw:'',
    loginErr:false

}

export const urlStore =Reflux.createStore({
    init(){
        this.listenToMany(urlAction);
    },
    onGetUrl(url){
        this.url=url;
        this.trigger(this.url)
    },
    onClearUrl(){
        this.url=null;
        this.trigger(this.url)
    },
    onChangeUser(name){
        loginInfor.userName=name;
        if(name.length==0){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名不能为空";
            return;
        }
        if(name.length<4||name.length>20){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名不能大于20或小于4个字符串";
            return;
        }
        var regE="^[a-zA-Z]+$";
        var re = new RegExp(regE);
        var result=re.test(name);
        if(!result){
            loginInfor.isErr=true;
            loginInfor.errorInfor="用户名只能为字母";
            return;
        }
        loginInfor.isErr=false;
        loginInfor.errorInfor='';


    },
    onChangePw(pw){
        loginInfor.userPw=pw;
        if(pw.length==0){
            loginInfor.isPWErr=true;
            return
        }
        
    },
    onFocusUser(){},
    onFocusPw(){}

});


