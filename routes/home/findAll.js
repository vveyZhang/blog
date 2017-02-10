var FindAll=require('../../services/home/findAll');

module.exports=function(req,res){
    FindAll(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'连接失败'});
        }
        res.json(data);
    })
};
