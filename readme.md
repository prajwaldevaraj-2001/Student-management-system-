1. Create a GitHub Repository:

Go to GitHub and create a new repository (e.g., student-management-system).

2. Open Codespaces:

Click on the "Code" button in your repository and select "Open with Codespaces."

3. Project Structure
Create a basic structure for your project:

student-management-system/
│
├── src/
│   ├── index.js
│   ├── student.js
│   └── studentManager.js
│
├── package.json
└── README.md

4. Initialize the Project
a. Initialize a Node.js project:

In the terminal, run:

npm init -y

b. Install Required Packages (if needed):

For a basic system, you might just need Express for a web interface:

npm install express

5. Create Basic Code
a. Create a Student Model (student.js):

// src/student.js
class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

module.exports = Student;

b. Create a Student Manager (studentManager.js):

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

c. Set Up the Server (index.js):

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

6. Run Your Application
a. In the terminal, run your application:

node src/index.js

b. Test Your API:

Use tools like Postman or curl to test your endpoints:
Add a Student: POST to http://localhost:3000/students with JSON body { "name": "John Doe", "age": 20 }
Get Students: GET http://localhost:3000/students

