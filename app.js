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
router = express.Router();
// view engine setup
app.use(helmet());
app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//设置session
app.use(cookieParser());
app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:false,
    cookie:{
        expires:1000*60*10 //过期时间设置(单位毫秒)
    }
}));
app.disable('view cache');
app.set('views', __dirname+ '/src');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'src')));
app.use(app.router);

routes(app);

app.use(function (req, res) {
     res.render('index')
});



module.exports = app;
