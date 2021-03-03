const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

//intialize express
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//adding students
app.post('/student/add', function (req, res) {
  let students = require('./Students')
  const student = req.body
  students.push(student)
  fs.writeFileSync('students.json', JSON.stringify(students))
  res.send({ "result": 'Success' })
})

//getting student details
app.get('/student/getDetails', function (req, res) {
  let students = require('./Students')
  res.send(students)
})

//getting only students names
app.get('/student/studentsList', function (req, res) {
  let students = require('./Students')
  const results = students.map(value => value.studentFirstName);
  res.send({ results })
})

//app running on port
app.listen(3000)
