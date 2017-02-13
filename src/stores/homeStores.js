import Reflux from 'reflux';
import {homeAction} from '../actions/homeAction.js';
var show=true;
export let homeStore=Reflux.createStore({
    init:function(){
        this.listenToMany(homeAction)
    },
    onToggle:function(){
        show=!show;
        this.trigger(show);
    },
    getStatus:function(){
        return show
    }
})
