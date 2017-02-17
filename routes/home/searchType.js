var SearchType=require('../../services/home/searchType');

module.exports=function(req,res){
    SearchType(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'连接失败'});
        }
        res.json(data);
    })
};

