// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "https://img.shields.io/badge/license-" + license + "-brightgreen";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
## Installation
${data.installation}
## Usage
${data.usage}
## License
![badge] ${renderLicenseLink(data.license)}
<br />
This application is covered by the ${data.license} license. 
## Contributing
${data.contributing}
## Tests
${data.tests}
<br />
<br />
My GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
You can reach me by Email if you have any questions: ${data.email}<br /><br />
`;
}

module.exports = generateMarkdown;
