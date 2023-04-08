const Circle = require('./circle');
const Triangle = require('./triangle')
const Square = require('./square');

let shapeSVG; 
function renderClass(shape) {
    switch(shape) {
        case 'circle':
            shapeSVG = new Circle();
            break;
        case 'square':
            shapeSVG = new Square();
            break;
        case 'triangle':
            shapeSVG = new Triangle();
            break; 
    }
}

function generateSVG (data) {
    renderClass(data.shape);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg.render(data.fill)}
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
    </svg>`
}

module.exports = generateSVG;