'use strict'
const db = require ('./models')

let addStudent = (student) => {
  db.Student.create({
    name: student.name,
    address: student.address})
  .then(student =>{
    console.log(`${student.name} Added!`);
  })
}

addStudent({name:'stedy', address: 'Olympus'})