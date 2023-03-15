'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  caption.init({
    photo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'photos',
        key: 'id'
      },
      allowNull: false,
      required: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false,
      required: true
    },
    comment: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'caption',
  });
  return caption;
};

