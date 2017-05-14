'use strict';


var db = require('../models')
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
    return new Promise((res, rej)=>{
      db.Student.findAll()
      .then(students=>{
        let promise = students.map(student=>{
          return new Promise((res, rej)=>{
            db.Student.update({
              name: student.getFullName()
            }, {
              where: {
                id: student.id
              }
            })
            .then((data)=>{
              console.log(`update has successfull: ${data}`);
              res(data)
            })
            .catch((err)=>{
              console.log(err);
              rej(err)
            })
          })
        })
        Promise.all(promise).then(values=>{
          console.log(values);
        })
      })
    })
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
