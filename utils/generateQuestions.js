import inquirer from 'inquirer';
const prompt = inquirer.prompt;

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
      message: 'Installation',
      validate: validate,
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
      validate: validate,
    },
  ]);
};

function validate(arg) {
  if (arg) return true;
  else {
    console.log('Please enter a valid input.');
    return false;
  }
}

export default questions;
