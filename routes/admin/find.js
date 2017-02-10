var Find=require('../../services/admin/find');

module.exports=function(req,res){
    Find(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'连接失败'});
        }
        res.json(data);
    })
};
