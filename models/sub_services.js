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
  return Sub_serives;
};