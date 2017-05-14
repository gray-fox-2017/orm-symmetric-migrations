'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     uniqe: true,
     validate: {
       isEmail: true,
       isUnique: function(value, next){
         Student.find({
           where: {
             email: value
           }
         }).then((err)=> {
           if(err)
             return next(`Email is already in use!`);
           next();
         })
       }
     }
    },
  height: DataTypes.INTEGER,
  phone: {
   type: DataTypes.STRING,
   allowNull: false,
   validate: {
     isAlphanumeric: function (value, next) {
       let numPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
       if(numPhone.test(value))
         next();
       return next('Format phone not valid');
     }
   }
  }
}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
        Student.findAll()
        .then(rows=>{
          rows.forEach(row=>{
            row.name = row.getFullName()
          })
          callback(rows)
        })
      }
    },
    instanceMethods: {
      getFullName: function(){
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
       let today = new Date();
       let birth_date = new Date(this.birth_date);
       let age = today.getFullYear() - birth_date.getFullYear();
       let m = today.getMonth() - birth_date.getMonth();
       if(m < 0 || (m === 0 && today.getDate() < birth_date.getDate())) {
         age-=1;
       }
       return age;
     }
    }
  });
  return Student;
};
