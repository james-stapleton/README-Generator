// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your app?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your app: ',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do I install your app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use your app?',
    },
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your app?',
},
{
    type: 'input',
    name: 'credits',
    message: 'Are there any collaborators?',
},
{
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['MIT', 'Apache', 'GMU', 'None', ]
},
{
    type: 'input',
    name: 'contribute',
    message: 'How can I contribute to your app?',
},
{
    type: 'input',
    name: 'test',
    message: 'How can I test your app?',
},
{
    type: 'input',
    name: 'questions',
    message: 'Where can I reach you with questions?',
},];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

    console.log(fileName, data);
    await fs.writeFile(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {

    // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = 'README.md';
            // console.log(data);
            writeToFile(filename, generateMarkdown(data));
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
