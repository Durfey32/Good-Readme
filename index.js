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
      name: 'tableOfContents',
      message: 'Give a list of your table of contents',
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
      type: 'input',
      name: 'license',
      message: 'What Licenses were used?',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'What sort of badges were used?',
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
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, tableOfContents, install, use, credit, license, badges, features, contribute, tests } = data;
    
    const readmeContent = `
  # ${title}
  
  ## Description
  ${description}
  
  ## Table of Contents
  ${tableOfContents}
  
  ## Installation
  ${install}
  
  ## Usage
  ${use}
  
  ## Credits
  ${credit}
  
  ## License
  ${license}
  
  ## Badges
  ${badges}
  
  ## Features
  ${features}
  
  ## Contributing
  ${contribute}
  
  ## Tests
  ${tests}
    `;
  
    fs.writeFile(fileName, readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file generated successfully!');
      }
    });
  }
  
  inquirer.prompt(questions)
    .then((data) => {
      const filename = `README2.md`;
      writeToFile(filename, data);
    });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
