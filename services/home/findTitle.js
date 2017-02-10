var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article,
    ArticleType=db.ArticleType;
module.exports= function (req,callback){
    co(function *(){
        var articles=yield ArticleType.findAll({
            attributes: ['article_type'],
            include:[{
                model:Article,
                as:'list',
                attributes:['id','article_title']
            }]

        });
        callback(null,articles);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};

