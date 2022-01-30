// Global Variables
let license;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      license = `![License: MIT](https://img.shields.io/badge/license-MIT-green)`;
      return license;
    case 'GNU':
      license = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      return license;
    case 'Apache':
      license = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      return license;
    default:
      license = 'None';
      return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = dataObj => {
  const { title, license } = dataObj;

  return `# Title: ${title} ${renderLicenseBadge(license)}
  `;
};

export default generateMarkdown;
