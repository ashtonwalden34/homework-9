const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMardown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "gitHubUser",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "appLink",
        message: "Please submit a link to your github repository."
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any instructions for installing dependencies related to your application." 
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any instructions related to the usage of your application."
    },
    {
        type: "input",
        name: "license",
        message: "Please enter any licenses for your application."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any instructions for contributing to your application."
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter instructions for running tests on your application."
    },
];


fs.writeFile("README.md", answers, function(err)
{
    if (err) {
        console.log(err);
    }else {
        console.log("success");
    }
})


/* function writeToFile(fileName, data) {
    
}*/

function init() {

}

init();