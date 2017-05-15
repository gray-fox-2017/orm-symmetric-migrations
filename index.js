const db = require('./models');
const repl = require('repl');


var all = () => {
  db.Student.getAllData(students => {

    for (let i = 0; i < students.length; i++) {
      let age = students[i].getAge();
      console.log('\n');
      console.log('Id: ' + students[i].id);
      console.log('Name: ' + students[i].name);
      console.log('Birthdate: ' + students[i].birthdate);
      console.log('Age: ' + age);
    }
  });
}

let insertStudent = (name,birthdate,height,email,phone,address) => {
  db.Student.create({'name':name,'birthdate':birthdate,'email':email,'height':height,'phone':phone,'address':address})
  .then (student => {
    console.log(JSON.stringify(student))
  })
  .catch (err =>{
    console.log(err.message);
  });
  }

var replServer = repl.start({
  prompt: '$ '
})
replServer.context.all = all
replServer.context.insertStudent = insertStudent
//test Validation
// insertStudent('test','1989-11-11',170,'asdf@gmail.com','082121212121','jl.test')
