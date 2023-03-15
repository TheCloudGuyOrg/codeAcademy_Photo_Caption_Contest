'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('photos', [{
      name: 'Bryce Canyon 1',
      url: 'file:///Users/dercox/Documents/Code/Code_Academy/Backend_Engineer/codeAcademy_Photo_Caption_Contest/public/images/bryce_canyon.jpg',
      citation: 'Derek R. Cox',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Bryce Canyon 2',
      url: 'file:///Users/dercox/Documents/Code/Code_Academy/Backend_Engineer/codeAcademy_Photo_Caption_Contest/public/images/bryce_canyon2.jpg',
      citation: 'Derek R. Cox',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Cottonwood Pass',
      url: 'file:///Users/dercox/Documents/Code/Code_Academy/Backend_Engineer/codeAcademy_Photo_Caption_Contest/public/images/cottonwood_pass.jpg',
      citation: 'Derek R. Cox',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Daisy at Echo Lake',
      url: 'file:///Users/dercox/Documents/Code/Code_Academy/Backend_Engineer/codeAcademy_Photo_Caption_Contest/public/images/daisy_echo_lake.jpg',
      citation: 'Derek R. Cox',
      createdAt: new Date(),
      updatedAt: new Date()
      } 
    ])
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('photos', null, {});
   }
};
