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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  let pickedLicense;
  switch (license) {
    case 'MIT':
      pickedLicense = `<a name="license"></a>
  ## License info:
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. ${renderLicenseLink(
    license
  )}`;
      return pickedLicense;
    case 'GNU':
      pickedLicense = `<a name="license"></a>
  ## License info:
  Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. ${renderLicenseLink(
    license
  )}`;
      return pickedLicense;
    case 'Apache':
      pickedLicense = `<a name="license"></a>
  ## License info:
  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. ${renderLicenseLink(
    license
  )}`;
      return pickedLicense;
    default:
      license = '';
      return license;
  }
};

const renderDemo = dataObj => {
  const { demo } = dataObj;

  if (demo) return `![demo](../assets/images/demo.gif)`;
  else return '';
};

const renderContributions = data => {
  const { contributions } = data;
  if (contributions) {
    return `<a name="contributions"></a>
  ## Contributions: 
  ${contributions}
    `;
  } else return '';
};

const renderTests = data => {
  const { testing } = data;
  if (testing) {
    return `<a name="contributions"></a>
  ## Tests: 
  ${testing}
    `;
  } else return '';
};

const renderLanguages = data => {
  const { languages } = data;
  if (languages) {
    return `<a name="languages"></a>
  ## Languages: 
    ${languages.map(language => language).join(', ')}
    `;
  } else return '';
};

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
  renderDemo,
  renderContributions,
  renderTests,
  renderLanguages,
};
