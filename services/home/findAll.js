var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
module.exports= function (req,callback){
    var page=req.query.page||1;
    var keyword=req.query.keyword||false;
    page=(parseInt(page)-1)*8;
    co(function *(){
        var articles={};
        if(!keyword||keyword=='null'||keyword==''){
             articles=yield Article.findAll({
                limit:8,
                offset:page,
                order:[['created_at','DESC']]
            });
        }else{
             articles=yield Article.findAll({
                limit:8,
                offset:page,
                order:[['created_at','DESC']],
                 where:{
                     $or: [
                         {
                             article_title: {
                                 $or:{
                                     $like: '%'+keyword+"%"
                                 }
                             }
                         },
                         {
                             article_content: {
                                 $or:{
                                     $like: '%'+keyword+"%"
                                 }
                             }
                         }
                     ]
                 }
            });
        }
        callback(null,articles);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};

