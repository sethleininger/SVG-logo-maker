const Shapes = require('./shapes');

class Square extends Shapes {
    render(color) {
        return `<rect x="60" y="10" rx="10" ry="10" width="300" height="300" fill="${color}"/>`
    }
}

module.exports = Square;