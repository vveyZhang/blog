var Upload=require('../../services/admin/upload');

module.exports=function(req,res){
    Upload(req,function(error,data){
        if(error){
            res.status(400);
            return res.json({error:'上传失败'});
        }
        res.json(data);
    })
}
