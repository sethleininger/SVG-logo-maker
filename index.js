// // const inquirer = require('inquirer');
// // const { join } = require('path');
// // const { writeFile } = require('fs/promises');
// // const { createDocument } = require('./document');


// const inquirer = require('inquirer');
// const SVGBuilder = require('./node_modules/svg-builder');


// // Define the list of available shapes
// const shapes = ['circle', 'triangle', 'square'];

// // Prompt the user for input using inquirer
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'text',
//       message: 'Enter up to three characters:',
//       validate: (input) => input.length <= 3,
//     },
//     {
//       type: 'input',
//       name: 'textColor',
//       message: 'Enter the text color (color keyword or hex code):',
//     },
//     {
//       type: 'list',
//       name: 'shape',
//       message: 'Choose a shape:',
//       choices: shapes,
//     },
//     {
//       type: 'input',
//       name: 'shapeColor',
//       message: 'Enter the shape color (color keyword or hex code):',
//     },
//   ])
//   .then((answers) => {
//     // Generate the SVG file using svg-builder
//     const svg = new SVGBuilder();
//     if (answers.shape === 'circle') {
//       svg.circle(150, 100, 50);
//     } else if (answers.shape === 'triangle') {
//       svg.polygon([75, 25], [175, 25], [125, 150]);
//     } else {
//       svg.rect(100, 50, 100, 100);
//     }
//     svg.fill(answers.shapeColor);
//     svg.text(answers.text, 150, 100, { fill: answers.textColor, 'text-anchor': 'middle' });
//     svg.width(300);
//     svg.height(200);
//     svg.viewbox(0, 0, 300, 200);
//     svg.save('logo.svg');

//     console.log('Generated logo.svg');
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const inquirer = require("inquirer");
const fs = require('fs')

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
}