var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article,
    ArticleType=db.ArticleType;
module.exports=function(req,callBack){
    var title=req.body.title,
        type=req.body.type,
        content=req.body.content,
        articleId=req.body.id;
    var newArticleType=false;
    var oldArticleType;
    co(function *(){
        var typeId;
        var articleType=yield ArticleType.findOne({
            where:{
                article_type:type
            }
        });
        if(!articleType){
            var   newType= ArticleType.build({
                article_type:type,
                article_author:"vvey"
            });
            newArticleType=yield newType.save();
            typeId=newArticleType.id;
        }else{
            typeId=articleType.id;
        }
      var  article= yield Article.findOne({
            where:{
                id:articleId
            }
        });
       oldArticleType=article.article_type;


        var newArticle=yield Article.update(
            {
                article_title: title,
                article_content:content,
                article_type:type,
                article_type_id:typeId
            },{
            where:{
                id:articleId
            }
        });
        var newArticle=yield Article.findAll({
                where:{
                    article_type:oldArticleType
                }
            });
        if(newArticle.length==0){
            ArticleType.destroy({
                where:{
                    article_type:oldArticleType
                }
            })


        }

        callBack(null,[{status:true}])
    }).catch(function(error){
        if(newArticleType){
            newArticleType.destroy();
        }
        callBack(error,null)
    })

}
