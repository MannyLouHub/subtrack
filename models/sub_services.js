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
  });
  Sub_services.associate = function (models) {
    Sub_services.hasMany(models.User_subs, {
      foreignKey: {
        allowNull: false,
      }
<<<<<<< HEAD
    });
  };
  return Sub_serives;
=======
    })
  }
  return Sub_services;
>>>>>>> 0f6ac9c685ad3330f034cb9f00cf68c7d2e6c897
};