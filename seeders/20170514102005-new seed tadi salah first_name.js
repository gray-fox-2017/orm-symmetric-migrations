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
      {name:'fi1 la1' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila1@gmail.com', address: 'add1' },
      {name:'fi2 la2' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila2@gmail.com', address: 'add2' },
      {name:'fi3 la3' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila3@gmail.com', address: 'add3' },
      {name:'fi5 la5' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila5@gmail.com', address: 'add5'},
      {name:'fi4 la4' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila4@gmail.com', address: 'add4' },
      {name:'fi6 la6' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila6@gmail.com', address: 'add6' },
      {name:'fi7 la7' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila7@gmail.com', address: 'add7' },
      {name:'fi8 la8' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila8@gmail.com', address: 'add8' },
      {name:'fi9 la9' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila9@gmail.com', address: 'add9' },
      {name:'fi10 la10' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila10@gmail.com', address: 'add10'},
      {name:'fi11 la11' , phone:'085813372797', createdAt:new Date(), updatedAt: new Date(), birthdate: new Date('1993-11-07'), email:'fila11@gmail.com', address: 'add11'}
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
