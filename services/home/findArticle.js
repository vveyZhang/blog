var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
module.exports= function (req,callback){
    var articleId=req.params.id;
    co(function *(){

         var article=yield Article.findOne({
            attributes: ['id','article_title','article_content','article_author','article_type',['updated_at','time']],
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

