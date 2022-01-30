// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  switch (license) {
    case 'MIT':
      license = `![License:](https://img.shields.io/badge/license-MIT-green)`;
      return license;
    case 'GNU':
      license = `![License:](https://img.shields.io/badge/License-GPLv3-green.svg)`;
      return license;
    case 'Apache':
      license = `![License:](https://img.shields.io/badge/License-Apache_2.0-green.svg)`;
      return license;
    default:
      license = '';
      return license;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch (license) {
    case 'MIT':
      license = `[Link to MIT license](https://choosealicense.com/licenses/mit/)`;
      return license;
    case 'GNU':
      license = `[Link to GPL (GNU) license](https://choosealicense.com/licenses/gpl-3.0/)`;
      return license;
    case 'Apache':
      license = `[Link to Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`;
      return license;
    default:
      license = '';
      return license;
  }
};

const renderLanguage = data => {
  if (data.languages != 0) {
    return `<a name="languages"></a>
    ## Languages/Frameworks used: 
      ${data.languages.join(', ')}
    `;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return ``;
  else {
    return `<a name="license"></a>
  ## License info:
  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  }
}

// Switch statement function

// TODO: Create a function to generate markdown for README
const generateMarkdown = dataObj => {
  const { title, license, ...data } = dataObj;

  return `
  # Title: ${title}

  ## Table of contents:
  * [ Description ](#about)
  * [ Installation ](#installation)
  * [ Usage ](#usage)
  * [ License ](#license)
   ${data.languages != 0 ? '* [ Languages ](#languages)' : ''}
   ${data.testing != 0 ? '* [ Testing ](#testing)' : ''}
   ${
     data.contributions != 0
       ? '* [ Contributions ](#contributions)'
       : ''
   }
  
  <a name="about"></a>
  ## About the project:
  ${data.about}

  <a name="installation"></a>
  ## Installation:
  ${data.installation}

  <a name="usage"></a>
  ## Usage:
  ${data.usage}

  ${renderLicenseSection(license)}

  ${renderLanguage(dataObj)}







  `;
};

export default generateMarkdown;
