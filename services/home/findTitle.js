var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article,
    ArticleType=db.ArticleType;
module.exports= function (req,callback){
    co(function *(){
        var articlesType=yield ArticleType.findAll({
            attributes: ['article_type','id'],
            order:[['created_at','DESC']]
        });
        var articlesNew=yield Article.findAll({
            limit:10,
            order:[['views','DESC']],
            attributes: ['article_title','id','views']
        });
        var articlesNav={
            category:articlesType,
            newest:articlesNew
        }
        callback(null,articlesNav);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};

