// src/index.js
const express = require('express');
const StudentManager = require('./studentManager');

const app = express();
const port = 3000;
const studentManager = new StudentManager();

app.use(express.json());

app.post('/students', (req, res) => {
    const { name, age } = req.body;
    const student = studentManager.addStudent(name, age);
    res.status(201).json(student);
});

app.get('/students', (req, res) => {
    res.json(studentManager.getStudents());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
