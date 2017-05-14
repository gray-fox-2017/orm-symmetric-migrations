'use strict';
let model = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return new Promise(function(res, rej) {
            model.Student.findAll().then(function(students) {
                let promises = students.map(function(student) {
                    return new Promise(function(resolve, reject) {
                        model.Student.update({
                            name: student.getFullName()
                        }, {
                            where: {
                                id: student.id
                            }
                        }).then(function(updatedData) {
                            console.log('masuk', updatedData);
                            resolve(updatedData)
                        }).catch(function(err) {
                            reject(err)
                        })
                    })
                })
                Promise.all(promises).then(function() {
                    console.log('Convert firstName and lastName into name was successfully');
                    res()
                }).catch(function(err) {
                    rej(err)
                })
            })
        })
    },
    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
