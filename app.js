var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var routes = require('./routes/index');
var BCrypt=require('bcryptjs');

var app = express();

// view engine setup
app.use(helmet());
app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//设置session
app.use(cookieParser());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60//过期时间设置(单位毫秒),
    }
}));

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'src')));
app.use(app.router);


app.use(function (req, res) {
    return res.render('index')
})
//user/下的用户验证
app.all("/manage/admin/*",function(req,res,next){

    //if(!req.session.username){
    //
    //
    //
    //}
    next();
});
/// catch 404 and forwarding to error handler
routes(app)

app.get('/', function(req, res){
    res.render('index');
});
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
