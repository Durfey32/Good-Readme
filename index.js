// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your page',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps required for installation?',
    },
    {
      type: 'input',
      name: 'use',
      message: 'How do you use the page?',
    },
    {
      type: 'input',
      name: 'credit',
      message: 'List collaborators',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What Licenses were used?',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Microsoft Public License', 'CC0', 'None'],  
      default: 'None',  
    },
    {
      type: 'input',
      name: 'badges',
      message: 'What is the importance of your License?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Project Features?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How would you like this page contributed?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Give Test Examples.',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, install, use, credit, license, badges, features, contribute, tests, Github, email } = data;
    
    // Format collaborators as a bullet list if provided
    const collaboratorsList = credit ? credit.split(',').map(collaborator => `* ${collaborator.trim()}`).join('\n') : '';

    const readmeContent = `
# ${title}

${license ? `Licenses: ![Static Badge](https://img.shields.io/badge/${license}-blue) \n` : ''} 

## Description
${description}

## Table of Contents
${install ?'* [Installation](#installation)' : ''}
${use ?'* [Usage](#usage)' : ''}
${credit ? '* [Credits](#credits)' : ''}
${license ? '* [License](#license)' : '' }
${badges ? '* [Badges](#badges)' : ''}
${features ? '* [Features](#features)' : ''}
${contribute ? '* [Contributing](#contribute)' : ''}
${tests ? '* [Tests](#tests)' : ''}
* [Questions?](#questions)

${install ? `
## Installation
${install}
` : ''}

${use ? `## Usage
${use}
` : ''}

${credit ? `
## Credits
${collaboratorsList}
` : ''}

${license ? `## License
![Static Badge](https://img.shields.io/badge/${license}-blue) \n
${badges ? badges : ''}
` : ''}

${features ? `## Features
${features}
` : ''}

${contribute ? `## Contributing
${contribute}
` : ''}

${tests ? `## Tests
${tests}
` : ''}

## Questions?
Github: [${Github}](https://github.com/${Github}) \n
Email: [${email}](mailto:${email}) \n
Please feel free to email me with any questions.
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}
// TODO: Create a function to initialize app
function init() {  inquirer.prompt(questions)
    .then((data) => {
      const filename = `README.md`;
      writeToFile(filename, data);
    });}

// Function call to initialize app
init();
