// Import Dependencies
const inquirer = require('inquirer');
const prompt = inquirer.prompt;
const { validate } = require('../utils/helperFunctions');

// Questions function
const questions = () => {
  // TODO: Create an array of questions for user input
  return prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of your project? (Required)',
      validate: validate,
    },
    {
      type: 'input',
      name: 'about',
      message: 'Enter your project description (Required):',
      validate: validate,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
      validate: validate,
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
      validate: validate,
    },
    {
      type: 'confirm',
      name: 'demo',
      message: 'Option to add Demo GIF',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message:
        'What languages/frameworks did you use: (Check all that apply)',
      choices: [
        'JavaScript',
        'HTML',
        'CSS',
        'ES6',
        'jQuery',
        'Bootstrap',
        'Node',
      ],
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Provide testing procedures:',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Provide contributions details:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License guidelines for this project (Required):',
      choices: ['MIT', 'GNU', 'Apache', 'None'],
      validate: validate,
    },
    {
      type: 'input',
      name: 'username',
      message: 'GitHub username (Required):',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide your e-mail address (Required):',
      validate: validate,
    },
  ]);
};

module.exports = questions;
