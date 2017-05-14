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
    return queryInterface.bulkInsert('Students', [{
  		"name": "Aretha Don",
      "gender": "Female",
  		"birthdate": "1994-09-28 00:52:02",
  		"email": "aliq.erasdos@Vivamussit.net",
  		"phone": "08328156006",
      "height": 160,
      "createdAt": new Date(),
      "updatedAt": new Date()
  	},
  	{
  		"name": "Baxter Tatyana",
      "gender": "Male",
  		"birthdate": "1993-02-08 09:07:01",
  		"email": "sem.egetdasultricesaauctor.net",
  		"phone": "08008401852",
      "height": 140,
      "createdAt": new Date(),
      "updatedAt": new Date()
  	},
  	{
  		"name": "Brittany Martha",
      "gender": "Female",
  		"birthdate": "1993-04-02 11:07:59",
  		"email": "congue.trpasis.Invulputaterisusa.net",
  		"phone": "08471441542",
      "height": 172,
      "createdAt": new Date(),
      "updatedAt": new Date()
  	},
  	{
  		"name": "Perry Xyla",
      "gender": "Female",
  		"birthdate": "1994-07-20 09:20:09",
  		"email": "ad.litsor@aelita.edu",
  		"phone": "08170644840",
      "height": 164,
      "createdAt": new Date(),
      "updatedAt": new Date()
  	},
  	{
  		"name": "September Darrel",
  		"birthdate": "1993-12-29 21:12:14",
      "gender": "Male",
  		"email": "eudm@easdtus.org",
  		"phone": "08738055164",
      "height": 157,
      "createdAt": new Date(),
      "updatedAt": new Date()
  	}], {});
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
