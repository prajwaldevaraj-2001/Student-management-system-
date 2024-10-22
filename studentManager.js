// src/studentManager.js
const Student = require('./student');

class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(name, age) {
        const id = this.students.length + 1;
        const student = new Student(id, name, age);
        this.students.push(student);
        return student;
    }

    getStudents() {
        return this.students;
    }
}

module.exports = StudentManager;
