"use strict"
let db = require('./models')
let data = {
  firstname: 'John',
  lastname: 'Doe',
  birthdate: '1990-09-16',
  email: 'john@mail.org',
  height: 170,
  phone: '085794279912',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

function addData(data) {
  db.Student.create({
    firstname: data.firstname,
    lastname: data.lastname,
    birthdate: data.birthdate,
    email: data.email,
    height: data.height,
    phone: data.phone
  }).then(function() {
    console.log(`${data.firstname} inserted`);
  }).catch(function(err) {
    console.log(err.message);
  })
}

function getAllStudentData() {
  db.Student.getAllData((cb) => {
    cb.forEach((res) => {
      console.log(res.id);
      console.log(res.firstname);
      console.log(res.lastname);
      console.log(res.name);
    })
  })
}

function getAllAgeStudent() {
  db.Student.getAllAge(() => {
    console.log('success')
    // cb.forEach((res) => {
    //   console.log(`${res.fullname} was age is ${res.age}`);
    // })
  })
}

function addColumnName() {
  db.Student.findAll().then((students) => {
    students.forEach((student) => {

      db.Student.update({
        name: student.getFullName()
      }, {
        where: {
          id: student.id
        }
      }).then(function(updatedData) {
        console.log('masuk', updatedData);
      })

    })
  })
}
//addData(data)
//getAllStudentData()
//getAllAgeStudent()
addColumnName()
