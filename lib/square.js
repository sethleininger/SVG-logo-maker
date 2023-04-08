const Shapes = require('./shapes');

class Square extends Shapes {
    render(color) {
        return `<rect x="60" y="20" width="200" height="200" fill="${color}"/>`
    }
}

module.exports = Square;