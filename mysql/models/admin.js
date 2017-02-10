/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    admin_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin_pw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin_auth: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    admin_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'admin'
  });
};
