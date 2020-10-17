/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  const Sub_services = sequelize.define('Sub_Services', {
    icon: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Sub_services.associate = function (models) {
    Sub_services.hasMany(models.User_subs, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Sub_services;
};