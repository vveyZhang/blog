var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
var ArticleType=db.ArticleType;
module.exports= function (req,callback){
    var page=req.query.page||1;
    var typeId=req.query.typeId||false;
    page=(parseInt(page)-1)*8;
    co(function *(){
        var articles={};
        if(!typeId||typeId=='null'){
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
                    article_type_id:typeId
                }
            });
        }

        callback(null,articles);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};


