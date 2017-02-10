var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
var ArticleType=db.ArticleType;
module.exports= function (req,callback){
    var type=req.query.type||'all';
    var page=req.query.page||1;

    offset=parseInt(parseInt(page)-1)*10;
    co(function *(){
        var articles,total;
        var typeName= yield ArticleType.findAll({
            attributes: ['article_type']
        });
        if(type=='all') {
            total=yield Article.findAll();
            total=total.length;
            articles = yield Article.findAll({
                attributes: ['id','article_title','article_type',['updated_at', 'time']],
                limit:10,
                offset:offset,
                order:[['updated_at','DESC']]
            });
        }else{
            total=yield Article.findAll({
                where:{
                    article_type:type
                }
            });
            total=total.length;
            articles=yield Article.findAll({
                attributes: ['id','article_title','article_type', ['updated_at', 'time']],
                where:{
                    article_type:type
                },
                limit:10,
                offset:offset,
                order:[['updated_at','DESC']]
            });
        }
        var data={
            articles:articles,
            total:total,
            current:parseInt(page),
            pages:Math.ceil(total/10),
            type:typeName
        }
        callback(null,data);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });

}
