'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class captions extends Model {
		static associate(models) {
			captions.belongsTo(models.photos, {
				foreignKey: 'photo_id',
				as: 'photo'
			});
			captions.belongsTo(models.user, {
				foreignKey: 'user_id',
				as: 'user'
			});
		}
	}
	captions.init({
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
	return captions;
};

