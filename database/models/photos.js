'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      photos.hasMany(models.caption, {
        foreignKey: 'photo_id',
        as: 'captions'
      })
    }
  }
  photos.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      isUrl: true
    },
    citation: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    }
  }, {
    sequelize,
    modelName: 'photos',
  });
  return photos;
};


