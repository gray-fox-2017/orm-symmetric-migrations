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
    let arr=[{
      name: 'John Doe',
      birthdate: new Date('1993-05-12'),
      email:'john@haha.com',
      height:180,
      phone:'123123123',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'James Sraun',
      birthdate: new Date('1993-11-10'),
      email:'james@haha.com',
      height:165,
      phone:'088282827123',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

    return queryInterface.bulkInsert('Students',arr,{});

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
