// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inqurer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a valid title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? ",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address: ",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
