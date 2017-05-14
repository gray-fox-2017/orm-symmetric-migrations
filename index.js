'use strict'

const repl = require('repl')

const replServer = repl.start({prompt:">"})

let db = require('./models')

function getFullNameStudent (){
  db.Student.findAll()
  .then(students =>{
    students.forEach(student =>{
      console.log(student.getFullName());
    })
  })
}


function getAge() {
  db.Student.findAll()
  .then(students=>{
    students.forEach(student=>{
      console.log(student.getAge());
    })
  })
}


let data ={
  first_name: "purna",
  last_name: "wira",
  birth_date:"1980-07-16",
  email: 'purna@gmail.com',
  height: 170,
  phone: '085697061254'
}

function addStudent(){
  db.Student.findAll()
    .then(students =>{
      console.log(students);
      students.forEach(student=>{
        db.Student.update({
          name:student.getFullName()
        }, { where:{
            id: student.id
        }
      })
      .then ((data)=>{
        console.log(`Update data succesfull: ${data}`);
      })
      })
    })
}


replServer.context.getFullName = getFullNameStudent;
replServer.context.getAge = getAge;
replServer.context.addStudent = addStudent;
