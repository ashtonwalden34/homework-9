/* function getBadge() {
  return '[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)';
}
*/ 

// getBadge();

function generateMarkdown(data) {
  return `${data.title}

Table of Contents:
    - GitHub username
    - Link to application
    - Description of application
    - Instructions for installation
    - Instructions for usage
    - Licenses
    - Instructions for contributing
    - Instructions for running tests


GitHub: ${data.gitHubUser}

Link: ${data.appLink}

Description: ${data.description}

Installation instructions: ${data.installation}

Usage instructions: ${data.usage}

Licenses: ${data.license}

Instructions for contributing: ${data.contributing}

Instructions for running tests: ${data.tests}
`;
};

module.exports = generateMarkdown;
// module.exports = getBadge;


// Notes on licenses and badges:
    // https://img.shields.io/badge/license-${license}-blue.svg
    // https://github.com/Naereen/badges/blob/master/README.md

