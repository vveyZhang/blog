var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article,
    ArticleType=db.ArticleType;
module.exports=function(req,callBack){
    var title=req.body.title,
        type=req.body.type,
        content=req.body.content;
    var newArticleType=false;
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
        var newArticle=Article.build({
            article_type:type,
            article_title:title,
            article_content:content,
            admin_id:1,
            article_author:'vvey',
            article_type_id:typeId,
            views:0
        });
        newArticle=yield  newArticle.save();
        callBack(null,[{status:true,id:newArticle.id}])
    }).catch(function(error){
        console.log(error)
        if(newArticleType){
            newArticleType.destroy();
        }
        callBack(error,null)
    })

}
