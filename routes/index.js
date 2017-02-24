var admin=require('./admin/index');
var home=require('./home/index');
var bcrypt=require('bcryptjs');
var sequelize=require('sequelize');
var db=require('../mysql/index');
var co=require('co');
var Admin=db.Admin;
var Article=db.Article;
//var salt=bcrypt.genSaltSync(5);
//var pass = bcrypt.hashSync(psw, salt);
module.exports= function (app) {
    app.get('/out',function(req,res){
        req.session.username=null;
        req.session.userpw=null;
        res.redirect('/login');
    });
    app.get('/admin',function(req,res,next){
        if(!req.session.username){
            res.redirect('/login');
            return;
        }
        var username=req.session.username;
        var userpw=req.session.userpw;
        co(function *(){
            var admin= yield  Admin.findOne({
                admin_name:username
            });
            if(admin.length==0){
                res.redirect('/login');
                return
            }

            if(admin.admin_pw==userpw){
                next();
                return
            }
            res.redirect('/login');
        }).catch(function(error){
            console.log(error);
            res.location('/login');
        })
    });
    app.all('/admin/*',function(req,res,next){
        if(!req.session.username){
            res.redirect('/login');
            return;
        }
        var username=req.session.username;
        var userpw=req.session.userpw;
        co(function *(){
            var admin= yield  Admin.findOne({
                admin_name:username
            });
            if(admin.length==0){
                res.redirect('/login');
                return
            }

            if(admin.admin_pw==userpw){
                next();
                return
            }
            res.redirect('/login');
        }).catch(function(error){
            console.log(error)
            res.location('/login');
        })
    });
    app.all('/manage/admin/*',function(req,res,next){
        if(!req.session.username){
            res.json({login:false});
            return;
        }
        var username=req.session.username;
        var userpw=req.session.userpw;
        co(function *(){
            var admin= yield  Admin.findOne({
                admin_name:username
            });
            if(admin.length==0){
                res.json({login:false});
                return
            }

            if(admin.admin_pw==userpw){
                next();
                return
            }
            res.json({login:false});
        }).catch(function(error){
            console.log(error)
            res.location('/login');
        })
    });
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
          if(bcrypt.compareSync(userpw,admin.admin_pw)){
              req.session.username=username;
              req.session.userpw=admin.admin_pw;
              res.json({status:true});
              return
          }
          res.json({'status':false});

      }).catch(function(error){
          console.log(error);
          res.json({'status':false});

      })

  });
    app.get('/notes/article/:id',function(req,res,next){
        var id=req.params.id;
        co(function *(){
         var article= yield Article.findOne({
             where:{
                 id:id
             }
         });
            var views=parseInt(article.views)+1;
            Article.update({
                views:views
            },{
                where:{
                    id:id
                }
            })
        }).catch(function(error){

            console.log(error)
        });
        next()
    })
  admin(app);
  home(app);
};