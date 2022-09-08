// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your app?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your app: ",
  },
  {
    type: "input",
    name: "install",
    message: "How do I install your app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use your app?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who else has collaborated on this app?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: ["MIT", "Apache", "Mozilla", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: "How can I contribute to your app?",
  },
  {
    type: "input",
    name: "test",
    message: "How can I test your app?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "questions",
    message: "What is the email I can reach you at with questions?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter the path to a screenshot showcasing your app: ",
  },
];

// Function to write README file
async function writeToFile(fileName, stringData) {
  //makes an asyncronous write call using the filename in the current working directory as one paramater, and the data from the inquirer.prompt as the second paramater.
  await fs.writeFile(path.join(process.cwd(), fileName), stringData);
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions) //the previously defined array of questions is the paramter for the prompt
    .then((data) => {
      const filename = "README.md"; //This program creates README's so the file name is a constant.
      //The generateMarkdown function will return a string literal for the writeToFile function to use as it's second parameter.
      writeToFile(filename, generateMarkdown(data));
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
