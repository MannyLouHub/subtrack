module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  const Custom_serives = sequelize.define("Custom_serives", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });
  // eslint-disable-next-line camelcase
  return Custom_serives;
};
