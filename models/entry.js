"use strict";

module.exports = function(sequelize, DataTypes) {
  var Entries = sequelize.define("Entries", {
    query_string: DataTypes.STRING,
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    tableName: 'fb_entries'
  });

  return Entries;
};
