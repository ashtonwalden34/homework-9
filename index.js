const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMardown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
    ]);
 };



promptUser()
    .then(function(inquirerResponses) {
        const README = generateMardown(inquirerResponses);

        return writeFileAsync("README.md", README, inquirerResponses);
    });
    
    /*
    .then(function() {
        console.log("wrote to md file")
    })
    .catch(function(err) {
        console.log(err)
    });
    */









 /*
 function populateMd(inquirerResponses) {
    fs.writeFileAsync("README.md", generateMardown, inquirerResponses)
};

promptUser().then(function(inquirerResponses) {
    populateMd(inquirerResponses);
});



fs.writeFileAsync("README.md", generateMarkdwon, function(err)
{
    if (err) {
        console.log(err);
    }else {
        console.log("success");
    }
});
*/






/*
function init() {
    promptUser().then((inquirerResponses) => {
        writeToFile("README.md", generateMardown, inquirerResponses);
    })
};

init();
*/