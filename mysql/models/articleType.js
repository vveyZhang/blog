/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articleType', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    article_author:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'articleType'
  });
};
