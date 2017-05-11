'use strict';
const db = require('../models')
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
    return new Promise((resolve,reject) =>{
      db.students.findAll()
      .then((students)=>{
        if(students){
          let promises = [];
          students.forEach((students) => {
            let promise = students.updateAttributes({
              name: students.getFullname()
            });
            promises.push(promise);
          })
          Promise.all(promises).then(function(data){
            resolve(data);
          })
          .catch((err)=>{
            reject(err);
          })
        }
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
