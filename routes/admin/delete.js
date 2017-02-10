var Delete=require('../../services/admin/delete');

module.exports=function(req,res){
    Delete(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'修改失败'});
        }
        res.json(data);
    })
}