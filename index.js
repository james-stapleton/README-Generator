// TODO: 
//// GIVEN a command-line application that accepts user input
//// WHEN I am prompted for information about my application repository
// //THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//// WHEN I enter my project title
// //THEN this is displayed as the title of the README
// //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//// WHEN I choose a license for my application from a list of options
//// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//// WHEN I enter my GitHub username
//// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// //WHEN I enter my email address
// //THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//// WHEN I click on the links in the Table of Contents
// //THEN I am taken to the corresponding section of the README


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
    choices: ['MIT', 'Apache', 'Mozilla', 'None', ]
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
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'questions',
    message: 'What is the email I can reach you at with questions?',
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
