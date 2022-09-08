// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("Badge", license);
  if (license === "None") {
  return '';
}
  else {
    var badgeURL ='';
    switch(license) {
      case "MIT":
        badgeURL = 'https://img.shields.io/apm/l/README?style=flat-square';
        break;
        case "Apache":
        badgeURL = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        break;
        case "Mozilla":
        badgeURL = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
        break;
    }
    return `
  ![${license}](${badgeURL});
`
  }
;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    var link;
    switch (license) {
      case "MIT":
        link = 'https://opensource.org/licenses/MIT';
        break;
        case "Apache":
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
        case "Mozilla":
        link = 'https://opensource.org/licenses/MPL-2.0';
        break;
    }
      return link;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
  This project is being licensed under ${license}. You can read the license here: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

## Description 

${data.description}
            
## Table of Contents 
            
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Testing](#tests)
- [Github](#github)
- [Questions](#questions)
            
## Installation
            
${data.install}
            
## Usage
            
${data.usage}
            
## Credits

${data.credits}
                
${renderLicenseSection(data.license)}
                        
## Contribute

${data.contribute}
            
## Tests
            
${data.test}

## GitHub

[Github](https://github.com/${data.github})
            
## Questions
            
If you have any questions, please email me at ${data.questions} with the subject "${data.title}"
`;
}

module.exports = generateMarkdown;
