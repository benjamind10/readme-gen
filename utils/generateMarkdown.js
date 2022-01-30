// Global Variables
let arg;

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
      license = `[MIT license](https://choosealicense.com/licenses/mit/)`;
      return license;
    case 'GNU':
      license = `[GPL (GNU) license](https://choosealicense.com/licenses/gpl-3.0/)`;
      return license;
    case 'Apache':
      license = `[Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`;
      return license;
    default:
      license = '';
      return license;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Switch statement function

// TODO: Create a function to generate markdown for README
const generateMarkdown = dataObj => {
  const { title, license } = dataObj;

  return `# Title: ${title} ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
};

export default generateMarkdown;
