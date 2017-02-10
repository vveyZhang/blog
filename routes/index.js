var admin=require('./admin/index');
var home=require('./home/index');
var bcrypt=require('bcryptjs');
var sequelize=require('sequelize');
var db=require('../mysql/index');
var co=require('co');
var Admin=db.Admin;
module.exports= function (app) {
    app.post('/manage/login',function(req,res){
      var username=req.body.username,
          userpw=req.body.userpw;

      co(function *(){
          var admin= yield  Admin.findOne({
              admin_name:username
          });
          if(admin.length==0){
              res.json({'status':false});
              return
          }

          if(bcrypt.compareSync(userpw,admin.salt)){
              req.session.username=username;
              req.session.userpw=admin.salt;
              res.json({status:true});
              console.log(req.session)
              return
          }
          res.json({'status':false});

      }).catch(function(error){
          console.log(error);
          res.json({'status':false});

      })

  });
    app.post('/manage/val',function(req,res){
        console.log(req.session)
       if(!req.session.username){
           res.json({status:false});
           return;
       }
       var username=req.session.username;
        var userpw=req.session.userpw;
        co(function *(){
            var admin= yield  Admin.findOne({
                admin_name:username
            });
            if(admin.length==0){
                res.json({'status':false});
                return
            }
            if(bcrypt.compareSync(admin.admin_pw,userpw)){
                res.json({status:true});
                return
            }
            res.json({'status':false});

        }).catch(function(error){
            console.log(error);
            res.json({'status':false});

        })

    });
  admin(app);
  home(app);
};