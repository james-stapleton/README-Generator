// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // string literal templates
  // if for none/null
  console.log("Badge", license);
  return `
  ![{license}](https://link to badge.png etc.)
`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `## License
    This project is being licensed under ${data.license}`;
  }

  return;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
}

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
            
## Installation
            
${data.install}
            
## Usage
            
${data.usage}
            
## Credits

${data.credits}
    
## License
            
${data.license}
            
## Badges
        
${renderLicenseBadge(data.license)}
            
## How to Contribute

${data.contribute}
            
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
            
## Tests
            
${data.tests}
            
## Questions
            
${data.questions}
            
5## Screenshots
`;
}

module.exports = generateMarkdown;
