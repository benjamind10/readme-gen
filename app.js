// TODO: Include packages needed for this application
import generateQuestions from './utils/generateQuestions.js';
import generateMarkdown from './utils/generateMarkdown.js';

const data = {
  title: 'Run Buddy',
  about: 'Testing the data goes like this',
  installation: 'installation tesint',
  usage: 'usage testing',
  language: ['HTML', 'JavaScript'],
  testing: 'testing script',
  contributions: 'testint',
  license: 'MIT',
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  generateQuestions().then(data => {
    generateMarkdown(data);
  });
}

// Function call to initialize app
init();
