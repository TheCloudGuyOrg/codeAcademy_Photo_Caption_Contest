'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'dercox',
      email: 'derek.ryan.cox+dercox@thecloudguy.org',
      password: 'P@ssw0rd',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      id: 2,
      name: 'daisy',
      email: 'derek.ryan.cox+daisy@thecloudguy.org',
      password: 'P@ssw0rd',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
   }
};
