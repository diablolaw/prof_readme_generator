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
    .then((response) => writeToFile("README_PROJECT.md", response));
}

// Function call to initialize app
init();
