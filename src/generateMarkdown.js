// Import functions
const {
  renderLicenseBadge,
  renderLicenseSection,
  renderDemo,
  renderContributions,
  renderTests,
  renderLanguages,
} = require('../utils/helperFunctions');

// TODO: Create a function to generate markdown for README
const generateMarkdown = dataObj => {
  const { title, license, ...data } = dataObj;

  return `
  # Title: ${title} ${renderLicenseBadge(license)}

  ## Table of contents:
  * [ Description ](#about)
  * [ Installation ](#installation)
  * [ Usage ](#usage)
  ${data.languages ? '* [ Languages ](#languages)' : ''}
  ${license === 'None' ? '' : '* [ License ](#license)'}
  ${data.testing ? '* [ Testing ](#testing)' : ''}
  ${data.contributions ? '* [ Contributions ](#contributions)' : ''}
  * [ Questions ](#questions)
  
  <a name="about"></a>
  ## Description:
  ${data.about}

  <a name="installation"></a>
  ## Installation:
    ${data.installation}

  <a name="usage"></a>
  ## Usage:
  ${data.usage} 

  ${renderDemo(dataObj)}
  
  ${renderLanguages(dataObj)}

  ${renderLicenseSection(license)}
  
  ${renderTests(data)}
  
  ${renderContributions(data)}

  <a name="questions"></a>
  ## Questions:
  Username: <a href=https://github.com/${data.username}>${
    data.username
  }</a>

  E-Mail: ${data.email}


  `;
};

module.exports = generateMarkdown;
