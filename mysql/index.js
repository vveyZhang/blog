var sequelize=require('./config.js'),
//引入模型
    Admin=sequelize.import('./models/admin.js'),
    ArticleDetail=sequelize.import('./models/article_detail.js'),
    ArticleType=sequelize.import('./models/articleType.js');
//
Admin.hasMany(ArticleDetail);
ArticleType.hasMany(ArticleDetail,{as:'list'});
//sequelize.sync({force:true});
module.exports={
    Admin:Admin,
    Article:ArticleDetail,
    ArticleType:ArticleType
};
