// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license === 'GPL 3.0') {
    return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)';
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'GPL 3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } 
    else {
    return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
  
    ## Installation
  
    ${data.installation}
  
    ## Usage
  
    ${data.usage}
  
    ## Contributing
  
    ${data.contributing}
  
    ## Tests
  
    ${data.tests}
  
    ${renderLicenseSection(data.license)}
  
    ## Questions
  
    If you have any questions, please feel free to contact me:
  
    - GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
    - Email: ${data.email}
    `;
  }
  


module.exports = generateMarkdown;

