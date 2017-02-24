var Find=require('./find');
var Upload=require('./upload');
var Change=require('./change');
var Delete=require('./delete');
var Details=require('./details');
module.exports=function(app){
    app.get('/manage/admin/find',Find);
    app.post('/manage/admin/change',Change);
    app.post('/manage/admin/upload',Upload);
    app.post('/manage/admin/delete',Delete);
    app.get('/manage/admin/details/:id',Details);
};
