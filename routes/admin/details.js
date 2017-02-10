var Details=require('../../services/admin/details');

module.exports=function(req,res){
    Details(req,function(err,data){
        if(err){
            res.status(400);
            return res.json({error:'修改失败'});
        }
        res.json(data);
    })
}/**
 * Created by helloxwz on 2017/2/7.
 */
