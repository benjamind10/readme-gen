// TODO: Include packages needed for this application
import fs from 'fs';
import generateQuestions from './utils/generateQuestions.js';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create a function to write README file
const writeFile = data => {
  fs.writeFile('./dist/README.md', data, error => {
    error
      ? console.log(error)
      : console.log(
          'Your README file has been succesfully generated.'
        );
  });
};

// TODO: Create a function to initialize app
function init() {
  generateQuestions()
    .then(responses => {
      return generateMarkdown(responses);
    })
    .then(data => {
      return writeFile(data);
    });
}

// Function call to initialize app
init();
