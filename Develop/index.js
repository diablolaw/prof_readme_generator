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
  switch (data.licence) {
    case "No Licence":
      fs.writeFile(fileName, `# ${data.title}\n\n`, (err) =>
        err ? console.error(err) : console.log("success")
      );
      break;
    case "MIT":
      fs.writeFile(
        fileName,
        `# ${data.title} ![APM](https://img.shields.io/apm/l/vim-mode)\n\n`,
        (err) => (err ? console.error(err) : console.log("success"))
      );
      break;
    case "Apache":
      fs.writeFile(
        fileName,
        `# ${data.title} ![AUR license](https://img.shields.io/aur/license/android-studio)\n\n`,
        (err) => (err ? console.error(err) : console.log("success"))
      );
      break;
    case "GNU":
      fs.writeFile(
        fileName,
        `# ${data.title} ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)\n\n`,
        (err) => (err ? console.error(err) : console.log("success"))
      );
      break;
    case "OpenBSD":
      fs.writeFile(
        fileName,
        `# ${data.title} ![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)\n\n`,
        (err) => (err ? console.error(err) : console.log("success"))
      );
  }

  fs.appendFile(
    fileName,
    `## Table of Contents\n\n[ Description. ](#desc)\n\n[ Installation. ](#installation)\n\n[ Usage. ](#usage)\n\n[ Contribution Guidelines. ](#contribution)\n\n[ Test Instructions. ](#test)\n\n[ Liscence. ](#liscence)\n\n[ Contact Info. ](#contact)\n\n`,
    (err) => (err ? console.error(err) : writeDescription())
  );
  function writeDescription() {
    fs.appendFile(
      fileName,
      `<a name="description"></a>\n## Description\n\n ${data.description}\n`,
      (err) => (err ? console.error(err) : writeInstall())
    );
  }
  function writeInstall() {
    fs.appendFile(
      fileName,
      `<a name="installation"></a>\n## Installation\n\n ${data.installation}\n`,
      (err) => (err ? console.error(err) : writeUsage())
    );
  }
  function writeUsage() {
    fs.appendFile(
      fileName,
      `<a name="usage"></a>\n## Usage\n\n ${data.usage}\n`,
      (err) => (err ? console.error(err) : writeContribution())
    );
  }
  function writeContribution() {
    fs.appendFile(
      fileName,
      `<a name="contribution"></a>\n## Contribution Guidelines\n\n ${data.contribution}\n`,
      (err) => (err ? console.error(err) : writeTest())
    );
  }
  function writeTest() {
    fs.appendFile(
      fileName,
      `<a name="test"></a>\n## Test Instructions\n\n ${data.test}\n`,
      (err) => (err ? console.error(err) : writeLiscence())
    );
  }
  function writeLiscence() {
    fs.appendFile(
      fileName,
      `<a name="licence"></a>\n## Licence\n\n ${data.licence}\n`,
      (err) => (err ? console.error(err) : writeContact())
    );
  }
  function writeContact() {
    fs.appendFile(
      fileName,
      `<a name="contact"></a>\n## Got any questions?\n\n github.com/${data.github}\n\n ${data.email}\n`,
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
        choices: ["No Licence", "MIT", "Apache", "GNU", "OpenBSD"],
      },
      { type: "input", message: questions[7], name: "github" },
      { type: "input", message: questions[8], name: "email" },
    ])
    .then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init();
