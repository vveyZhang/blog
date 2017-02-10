var db=require('../index');
var sequelize=require('sequelize');
var co=require("co");

var Article=db.Article;
module.exports= function (req,callback){

    var page=req.query.page||0;
    page=parseInt(page)*8;
    co(function *(){
        var articles=yield Article.findAll({
            limit:8,
            offset:page,
            order:[['updated_at','DESC']]
        });
        callback(null,articles);
    }).catch(function(error){
        console.log(error);
        callback(error,null)
    });
};

