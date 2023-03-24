'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.caption, {
        foreignKey: 'user_id',
        as: 'captions'
      })
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      len: [8,20]
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};

