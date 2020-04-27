const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

/*const questions = [
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    }
];

function promptUser() {
    return inquirer.prompt([
        questions
    ]);
};
*/

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "githubUsername",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "project",
            message: "What is the name of your project?"
        }
    ])
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

        axios.get(queryUrl).then(function(res) {
            const 
        });
    });
};


   
// Using axios to call GitHub API
axios
    .get(https://api.github.com")


function createReadMe(answers) {
    return `
    Project Title: ${answers.project}

    Description:

    Contributing:

    Email:

    Profile Pic:

    Tests:
    `
}

// May be sub for writeFileAsync
    // fileName: README.md
    // data: md?
function writeToFile(fileName, data) {
}

writeToFile ();

async function init() {
    try {
        const answers = await promptUser();

        const readMe = createReadMe(answers);

        await writeFileAsync("README.md", md);
        
        console.log("Succesfully wrote README.md");
    } catch(err) {
        console.log(err);
    }
}

init();
