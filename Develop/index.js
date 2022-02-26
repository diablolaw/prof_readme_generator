// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "Enter the title of your project:",
  "Enter the description:",
  "Enter the installation instructions:",
  "Enter usage information:",
  "Enter contribution guidelines:",
  "Enter test instructions:",
  "Which licence is the application covered under?",
  "Enter your Github username:",
  "Enter your email address:",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, `# ${data.title}\n\n`, (err) =>
    err ? console.error(err) : console.log("success")
  );
  fs.appendFile(
    fileName,
    `## Table of Contents\n[ Description. ](#desc)\n[ Installation. ](#installation)\n[ Usage. ](#usage)\n[ Contribution Guidelines. ](#contribution)\n[ Test Instructions. ](#test)\n[ Liscence. ](#liscence)\n[ Contact Info. ](#contact)\n`,
    (err) => (err ? console.error(err) : writeDescription())
  );
  function writeDescription() {
    fs.appendFile(
      fileName,
      `<a name="description"></a>\n## Description\n ${data.description}\n`,
      (err) => (err ? console.error(err) : writeInstall())
    );
  }
  function writeInstall() {
    fs.appendFile(
      fileName,
      `<a name="installation"></a>\n## Installation\n ${data.installation}\n`,
      (err) => (err ? console.error(err) : writeUsage())
    );
  }
  function writeUsage() {
    fs.appendFile(
      fileName,
      `<a name="usage"></a>\n## Usage\n ${data.usage}\n`,
      (err) => (err ? console.error(err) : writeContribution())
    );
  }
  function writeContribution() {
    fs.appendFile(
      fileName,
      `<a name="contribution"></a>\n## Contribution Guidelines\n ${data.contribution}\n`,
      (err) => (err ? console.error(err) : writeTest())
    );
  }
  function writeTest() {
    fs.appendFile(
      fileName,
      `<a name="test"></a>\n## Test Instructions\n ${data.test}\n`,
      (err) => (err ? console.error(err) : writeLiscence())
    );
  }
  function writeLiscence() {
    fs.appendFile(
      fileName,
      `<a name="licence"></a>\n## Licence\n ${data.licence}\n`,
      (err) => (err ? console.error(err) : writeContact())
    );
  }
  function writeContact() {
    fs.appendFile(
      fileName,
      `<a name="contact"></a>\n## Got any questions?\n github.com/${data.github}\n ${data.email}\n`,
      (err) => (err ? console.error(err) : console.log("success"))
    );
  }
}

// TODO: Create a function to initialize app
function init() {
  inquire
    .prompt([
      { type: "input", message: questions[0], name: "title" },
      { type: "input", message: questions[1], name: "description" },
      { type: "input", message: questions[2], name: "installation" },
      { type: "input", message: questions[3], name: "usage" },
      { type: "input", message: questions[4], name: "contribution" },
      { type: "input", message: questions[5], name: "test" },
      {
        type: "list",
        message: questions[6],
        name: "licence",
        choices: ["option1", "option2", "option3"],
      },
      { type: "input", message: questions[7], name: "github" },
      { type: "input", message: questions[8], name: "email" },
    ])
    .then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init();
