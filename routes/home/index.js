
var FindAll=require('./findAll');
var Article=require('./findArticle');
var FindTitle=require('./findTitle');

module.exports=function(app){
    app.get('/handle/home/find',FindAll);
    app.get('/handle/home/title',FindTitle);
    app.get('/handle/home/article/:id',Article);
};