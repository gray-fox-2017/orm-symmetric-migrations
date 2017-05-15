'use strict'

const repl = require('repl');
const {Student} = require('./models');
let replServer = repl.start();

replServer.context.readAll = Student.getAllData;