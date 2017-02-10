import Reflux from 'reflux';
import {manageAction} from '../actions/manageAction.js'
import $ from 'jquery'

let list={};
list.checkedId=[];
list.articles=[];
list.all=false;

export let manageStore=Reflux.createStore({
    init: function () {
        this.listenToMany(manageAction);
    },
    onToggleId:function(id){
        list.all=false;
        var index=list.checkedId.indexOf(id);
        if(index==-1){
            list.checkedId.push(id);
            for(let item of list.articles.articles){
                if(item.id==id) item.checked=true;
            }

            if(list.checkedId.length==list.articles.articles.length){
                list.all=true;
            }
            this.trigger(list);
            return ;

        }
        list.checkedId.splice(index,1);

        for(let item of list.articles.articles){
            if(item.id==id) item.checked=false;
        }

        this.trigger(list)

    },
    onToggleAll:function(){
        list.all=!list.all;
        list.checkedId=[];
        if(list.all){
            for(let item of list.articles.articles){
                item.checked=true;
                list.checkedId.push(item.id)
            }

            this.trigger(list)
            return
        }
        for(let item of list.articles.articles){
            item.checked=false;
        }

        this.trigger(list)

    },
    onSetList:function(data=list.articles.articles){
        list.articles=data;
        list.checkedId=[];
        list.all=false;
        this.trigger(list)
    },
    getList:function(){
        return list
    }
});