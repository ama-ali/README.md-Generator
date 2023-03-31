// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//Created an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines for your project:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions for your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause']
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];
  

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("README.md file has been generated!");
      }
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
});
}

// call function to initialize app
init();
