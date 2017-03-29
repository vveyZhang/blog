var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
module.exports= function (req,callback){
    var articleId=req.params.id;
    co(function *(){
         var article=yield Article.findOne({
            where:{
                id:articleId
            }
        });
        var newArticle=yield Article.update({
            views:article.views+1
        },{
            where:{
                id:articleId
            }
        });
        article=yield Article.findOne({
            where:{
                id:articleId
            }
        });
        callback(null,article);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};

