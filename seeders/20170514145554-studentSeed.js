'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Students',
      [
        {name:'Cyborg101 Indonesia', birthday:new Date(1991,1,18), email:'cyborg101@indonesia.com', phone:'081234567890', address:'101 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg201 Indonesia', birthday:new Date(1991,2,18), email:'cyborg201@indonesia.com', phone:'081234567891', address:'201 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg301 Indonesia', birthday:new Date(1991,3,18), email:'cyborg301@indonesia.com', phone:'081234567892', address:'301 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg401 Indonesia', birthday:new Date(1991,4,18), email:'cyborg401@indonesia.com', phone:'081234567893', address:'401 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg501 Indonesia', birthday:new Date(1991,5,18), email:'cyborg501@indonesia.com', phone:'081234567894', address:'501 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg601 Indonesia', birthday:new Date(1991,6,18), email:'cyborg601@indonesia.com', phone:'081234567895', address:'601 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg701 Indonesia', birthday:new Date(1991,7,18), email:'cyborg701@indonesia.com', phone:'081234567896', address:'701 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg801 Indonesia', birthday:new Date(1991,8,18), email:'cyborg801@indonesia.com', phone:'081234567897', address:'801 Land', createdAt:new Date(), updatedAt:new Date()},
        {name:'Cyborg901 Indonesia', birthday:new Date(1991,9,18), email:'cyborg901@indonesia.com', phone:'081234567898', address:'901 Land', createdAt:new Date(), updatedAt:new Date()}
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
