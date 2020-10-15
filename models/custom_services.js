/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  const Custom_services = sequelize.define("Custom_services", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });
  ////Creating Custom_Services Association
  Custom_services.associate = function(models) {
    Custom_services.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Custom_services;
};
