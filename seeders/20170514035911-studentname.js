'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('Students',[{
      name: 'stedy yulius',
      address: 'jkt',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'recca lie',
      address: 'jkt',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
