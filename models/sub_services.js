/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  const Sub_serives = sequelize.define('Sub_Services', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    }
  });
  Sub_serives.associate = function (models) {
    Sub_serives.hasMany(models.User_subs, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Sub_serives;
};