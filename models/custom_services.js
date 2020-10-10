module.exports = function (sequelize, DataTypes) {
  const Custom_serives = sequelize.define('Custom_serives', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    }
  });
  ////Creating Custom_Services Association
  Custom_serives.associate = function (models){
    Custom_serives.belongsTo(models.User, {
      foreignKey: {
        allowNull:false,
      }
    })
  }
  return Custom_serives;
};