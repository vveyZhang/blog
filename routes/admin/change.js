
var Change=require('../../services/admin/change');

module.exports=function(req,res){
    Change(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'修改失败'});
        }
        res.json(data);
    })
};