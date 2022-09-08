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
                type: 'input',
                name: 'license',
                message: 'What is license?',
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
            },
        ])
        .then((data) => {
            const filename = `${data.title.split(' ').join('')}.md`;
            const stringMD = 
`# ${data.title}

## Description 

${data.description}
            
## Table of Contents 
            
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
            
## Installation
            
${data.install}
            
## Usage
            
${data.usage}
            
## Credits

${data.credits}
    
## License
            
${data.license}
            
## Badges
            
            
## How to Contribute

${data.contribute}
            
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
            
## Tests
            
${data.tests}
            
## Questions
            
${data.questions}
            
5## Screenshots`
            

            
            //! fs.writeFile(`./assets/images/${data.image}`) Is there a way to create the image in the folder for the user?
            fs.writeFile(filename, stringMD, (err) => err ? console.log(err) : console.log('Success!'));
        })
}

// Function call to initialize app
init();
