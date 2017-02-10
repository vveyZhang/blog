
var Sequelize = require('sequelize');
var config = require('./config.json');

var dbStorage = new Sequelize(config.db_name, config.username, config.password, {
    dialect: "mysql",
    host: config.host,
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    'define': {
        // 字段以下划线（_）来分割（默认是驼峰命名风格）
        'underscored': true
    }
});

dbStorage.authenticate()
    .then(function () {
        console.log("数据库连接成功! ");
    })
    .catch(function (err) {
        console.log(err);
    })
    .done();

module.exports = dbStorage;