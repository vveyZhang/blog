/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article_detail', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    views:{
      type:DataTypes.INTEGER(11),
      allowNull: false
    },
    article_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    article_content: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    article_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    article_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'article_detail'
  });
};
