var Article=require('../../services/home/findArticle');

module.exports=function(req,res){
    Article(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'连接失败'});
        }
        res.json(data);
    })
};


