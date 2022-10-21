// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME =({title, description, liveLink, HTMLlink, CSSlink, JSlink, extraLinks, altTextOne, pathwayImageOne, altTextTwo, pathwayImageTwo, altTextThree, pathwayImageThree, license, licenseLink, contributions, tests, questions}) => 
    `#${title}
    
    ## Description
    ${description}

    ## Installation

    -Live Site: ${liveLink}

    -HTML Link: ${HTMLlink}

    -CSS Link: ${CSSlink}

    -Javascript Link: ${JSlink}

    -Other Links: ${extraLinks}

    ## Usage

    ![${altTextOne}](${pathwayImageOne})

    ![${altTextTwo}](${pathwayImageTwo})

    ![${altTextThree}](${pathwayImageThree})

    ## License
    ${license}

    ${licenseLink}

    ## Contibutions
    ${contributions}

    ## Testing
    ${tests}

    ## Questions
    ${questions}
    `;


// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Copy and paste the live link to your site here',
            name: 'liveLink',
        },
        {
            type: 'input',
            message: 'Copy and paste the HTML link to your site here',
            name: 'HTMLlink',
        },
        {
            type: 'input',
            message: 'Copy and paste the CSS link to your site here',
            name: 'CSSlink',
        },
        {
            type: 'input',
            message: 'Copy and paste the Javascript link to your site here',
            name: 'JSlink',
        },
        {
            type: 'input',
            message: 'Copy and paste any extra useful links here',
            name: 'extraLinks',
        },
        {
            type: 'input',
            message: 'Describe your first image of the site',
            name: 'altTextOne',
        },
        {
            type: 'input',
            message: 'provide the link to your first image',
            name: 'pathwayImageOne',
        },
        {
            type: 'input',
            message: 'Describe your second image of the site',
            name: 'altTextTwo',
        },
        {
            type: 'input',
            message: 'provide the link to your second image',
            name: 'pathwayImageTwo',
        },
        {
            type: 'input',
            message: 'Describe your third image of the site',
            name: 'altTextThree',
        },
        {
            type: 'input',
            message: 'provide the link to your third image',
            name: 'pathwayImageThree',
        },
        {
            type: 'input',
            message: 'What license did you use?',
            name: 'license',
        }, 
        {
            type: 'input',
            message: 'provide the link to your license',
            name: 'licenseLink',
        },
        {
            type: 'input',
            message: 'Describe any contributions others made',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Describe any tests you conducted',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'Provide any questions and answers you would like to answer about your project',
            name: 'questions',
        },
    ])

// TODO: Create a function to write README file
.then((response) => {
    const READMEContent = generateREADME(response);

    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.error(err) : console.log('Success!'));
})



// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
