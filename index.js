// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your app?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your app: ',
                },
        ])
        .then((data) => {
            const filename = `${data.title.split(' ').join('')}.md`;
            const stringMD = 
            `## Title
${data.title}
## Description
${data.description}`;
            fs.writeFile(filename, stringMD, (err) => err ? console.log(err) : console.log('Success!'));
        })
}

// Function call to initialize app
init();
