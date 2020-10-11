/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const User_subs = sequelize.define("User_subs", {});

  User_subs.associate = function(models) {
    console.log(models.User);
    User_subs.belongsTo(models.User, {
      onDelete: "cascade"
    });
    User_subs.belongsTo(models.Sub_Services, {
      onDelete: "cascade"
    });
  };
  return User_subs;
};
