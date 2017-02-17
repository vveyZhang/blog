
var FindAll=require('./findAll');
var Article=require('./findArticle');
var FindTitle=require('./findTitle');
var SearchType=require('./searchType');

module.exports=function(app){
    app.get('/handle/home/find',FindAll);
    app.get('/handle/home/title',FindTitle);
    app.get('/handle/home/article/:id',Article);
    app.get('/handle/home/findtype',SearchType);
};