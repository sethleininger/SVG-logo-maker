

const inquirer = require("inquirer");
const fs = require('fs')
const svgRender = require('./lib/generateSVG');

const userPrompt = () => {
    return inquirer.prompt(
        [
        {
            type: 'input',
            message:'Choose three Characters for you logo.',
            name: "text"
        },
        
        {
            type: 'input',
            message: 'Input a color or hexideximal code for your text',
            name: 'textcolor',
        },
        {
            type:'rawlist',
            message: 'select a shape for your logo',
            choices:['circle','square','triangle'],
            name: 'shape'
        },
        {
            type:'input',
            message: 'Input a color or hexidecimal code for your shape',
            name:'fill'

        }
    ]
    )
};

userPrompt().then(data => {
    const svgMarkup = svgRender(data);

    fs.writeFile('logo.svg', svgMarkup, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('SVG file created');
        }
    });
}).catch(err => {
    console.error(err);
});

