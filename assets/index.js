// TODO: Include packages needed for this application
const inquirer = require('inquirer');

console.log('gen is running');

// array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
},
{
    type: 'input',
    name: 'description',
    message: 'A description of your project?',
},
{
    type: 'input',
    name: 'contents',
    message: 'List a table of contents:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Any Installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Project Usage?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution info?',
},
{
    type: 'list',
    name: 'license',
    message: 'What is your License?',
    choices: ['MIT', 'ISC', 'GNUPLv3'],
    filter(val) {
        return val.toLowerCase();
    }
},
{
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',

},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
},

];

//query function, uses inquirer, prompts questions in order. Collects answers
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        return answers 
    })
    //catcg block in case of error
    .catch((error)=>{
        console.log('error');
    });
}

runQuery();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
