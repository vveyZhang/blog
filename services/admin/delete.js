var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article,
    ArticleType=db.ArticleType;
module.exports=function(req,callBack){
    var arrayId=req.query.id.split(',');
    var oldArticleType;
    co(function *(){
        for(var i=0;i<arrayId.length;i++){
            var articleId=arrayId[i];
            var  article= yield Article.findOne({
                where:{
                    id:articleId
                }
            });
            oldArticleType=article.article_type;
            yield article.destroy();
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


            };
        }
        callBack(null,[{status:true}])
    }).catch(function(error){
        callBack(error,null)
    })

}
