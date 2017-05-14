'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          msg : 'Email tidak sesuai format'
        },
        isUnique: function(value,next) {
          if (value) {
            Student
            .find({where:{email:value}})
            .then(function (student) {
              if (student) next('Email sudah ada');
              else next();
            }).error(function(err) {
              next(err.message);
            })
          }
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is:{
          args: /\d{10,13}/i,
          msg: 'Phone harus berupa 10-12 digit angka'
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function() {
        Student.findAll()
        .then((students)=>{
          console.log('====================================STUDENT LIST==================================================')
          students.forEach((student)=>{
            console.log(` | ${student.name} | ${student.phone} | ${student.getAge()} |${student.email} |  ${student.address}`);
            // console.log(` | ${student.first_name} ${student.last_name} | ${student.phone} | ${student.getAge()} |${student.email}`);
          });
        });
      }
    },
    instanceMethods: {
      getAge: function ()  {
        let currYear = new Date().getFullYear();
        let birthYear= new Date(`${this.birthdate}`).getFullYear() ;
        return (parseInt(currYear) - parseInt(birthYear))
      }
    }
  });
  return Student;
};