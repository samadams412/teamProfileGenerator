const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const render = require('./lib/generateHTML');
const teamArr = [];

function employeeQs() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'answerName',
            message: 'Enter the name of an Employee to add',
        },
        {
            type: 'input',
            name: 'answerId',
            message: 'Enter an ID number for Employee',
        }, 
        {
            type: 'input',
            name: 'answerEmail',
            message: 'Enter an Email address for Employee',
        },
        {
            type: 'list',
            name: 'answerRole',
            message: 'Assign Employee role',
            choices: ["Manager", "Engineer", "Intern"]
        },
    ]).then(function(answers) {
        if(answers.answerRole === "Manager") {
            managerQs(answers);
        }else if(answers.answerRole === "Engineer") {
            engineerQs(answers);
        }else if(answers.answerRole === "Intern") {
            internQs(answers);
        }
        
    })
}

function engineerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'answerGithub',
            message: 'What is the github username of the Engineer you wish to add?',
        },
        {
            type: 'confirm',
            name: 'answerAddAnother',
            message: 'Would you like to add another Employee?',
        },
    ]).then(function(answers) {
        const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerId, baseAnswers.answerEmail, answers.answerGithub);
        teamArr.push(newEngineer);
        if(answers.answerAddAnother === true) {
            employeeQs();
        } else {
            buildTeam();
            console.log("HTML Generated Successfully!");
        }
    })
}

function managerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'answerOfficeNumber',
            message: 'Enter the office number for Manager',
        },
        {
            type: 'confirm',
            name: 'answerAddAnother',
            message: 'Would you like to add another Employee?',
        },
    ]).then(function(answers) {
        const newManager = new Manager(baseAnswers.answerName, baseAnswers.answerId, baseAnswers.answerEmail, answers.answerOfficeNumber);
        teamArr.push(newManager);
        if(answers.answerAddAnother === true) {
            employeeQs();
        } else {
            buildTeam();
            console.log("HTML Generated Successfully!");
        }
    })
}

function internQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'answerSchool',
            message: 'School attenended/attending?',
        },
        {
            type: 'confirm',
            name: 'answerAddAnother',
            message: 'Would you like to add another Employee?',
        }
    ]).then(function(answers) {
        const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerId, baseAnswers.answerEmail, answers.answerSchool);
        teamArr.push(newIntern);
        if(answers.answerAddAnother === true) {
            employeeQs();
        } else {
            buildTeam();
            console.log("HTML Generated Successfully!");
        }
    })
}

function buildTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}

employeeQs();