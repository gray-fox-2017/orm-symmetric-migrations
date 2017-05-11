"use strict"
const db = require ('./models')
const repl = require('repl')
const replServer = repl.start({ prompt : ' Type Your Choice : ' })

function fullNameStudent() {
  db.Students.findAll()
  .then(student => {
    student.forEach((data) =>{
      console.log("\n" +"Nama : "+ data.getFullName()+ ", Age = " + data.getAge());
    })
  })
}

function getDataAll() {
  db.Students.findAll()
  .then(murid=>{
    murid.forEach((datamurid)=>{
      console.log("No.ID " +datamurid.id);
      console.log("Nama Lengkap : " +datamurid.getFullName());
      console.log("First Name : " +datamurid.name);
      console.log("Tinggi Badan : "+datamurid.height);
      console.log("Tinggi Badan : "+datamurid.address);
      console.log("Umur : " +datamurid.getAge()+" Tahun");
      console.log();
    })
  })
}


function addStudent(name,email,height,birthdate,address,phone) {
  db.Students.create({
    name : name,
    email : email,
    height : height,
    birthdate : birthdate,
    address : address,
    phone : phone
  }).then(function(){
    console.log(`Data Berhasil dinput`);
  }).catch(function(err){
    console.log(err.message);
  })
}


function Help() {
  console.log("- fullNameStudent()");
  console.log("- getDataAll()");
  console.log("- addStudent()");
}
replServer.context.fullNameStudent = fullNameStudent
replServer.context.getDataAll = getDataAll
replServer.context.addStudent = addStudent
// addStudent('Dara','ambo@yahoo.com','170','1985-10-10','JL.Manunggall no.17','085611236728')
replServer.context.Help = Help
