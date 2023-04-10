'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('captions', [{
			photo_id: 1,
			user_id: 1,
			comment: 'Test Comment: Derek-Bryce1',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			photo_id: 3,
			user_id: 1,
			comment: 'Test Comment: Derek-Cottonwood',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			photo_id: 1,
			user_id: 2,
			comment: 'Test Comment: Daisy-Bryce1',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			photo_id: 3,
			user_id: 2,
			comment: 'Test Comment: Daisy-Cottonwood',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			photo_id: 4,
			user_id: 1,
			comment: 'Test Comment: Derek-Echo',
			createdAt: new Date(),
			updatedAt: new Date()
		}
		]);
	},
	async down (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('captions', null, {});
	}
};
