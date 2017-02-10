var FindTitle=require('../../services/home/findTitle');

module.exports=function(req,res){
    FindTitle(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'连接失败'});
        }
        res.json(data);
    })
};

