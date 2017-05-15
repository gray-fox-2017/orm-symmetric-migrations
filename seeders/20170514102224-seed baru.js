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
      {first_name:'fi1' , last_name: 'la1', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila1@gmail.com' },
      {first_name:'fi2' , last_name: 'la2', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila2@gmail.com' },
      {first_name:'fi3' , last_name: 'la3', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila3@gmail.com' },
      {first_name:'fi4' , last_name: 'la4', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila4@gmail.com' },
      {first_name:'fi5' , last_name: 'la5', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila5@gmail.com' },
      {first_name:'fi6' , last_name: 'la6', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila6@gmail.com' },
      {first_name:'fi7' , last_name: 'la7', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila7@gmail.com' },
      {first_name:'fi8' , last_name: 'la8', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila8@gmail.com' },
      {first_name:'fi9' , last_name: 'la9', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila9@gmail.com' },
      {first_name:'fi10' , last_name: 'la10', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila10@gmail.com' },
      {first_name:'fi11' , last_name: 'la11', phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila11@gmail.com' }
    ],
    {})
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
