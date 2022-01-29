const inquirer = require('inquirer');

module.exports = questions = () => {
  // TODO: Create an array of questions for user input
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of your project? (Required)',
      validate: validateTitle => {
        if (validateTitle) return true;
        else {
          console.log('Enter a project title');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'about',
      message: 'Enter your project description (Required):',
      validate: description => {
        if (description) return true;
        else {
          console.log('Please enter a description.');
          return false;
        }
      },
    },
  ]);
};
