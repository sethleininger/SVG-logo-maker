const shapes = require("./shapes.js");
const Circle = require("./circle.js");
const Triangle = require('./triangle.js')
const Square = require('./square.js')

describe("shaperendered", () => {
  describe("circle", () => {
    it("should return svg for circle",
      () => {
        const shape = new Circle();
        expect(shape.render('blue')).toEqual(
          `<circle cx="150" cy="100" r="80" fill="blue"/>`
        );
      });
  });

  describe("triangle", () => {
    it("should return svg for triangle",
      () => {
        const tri = new Triangle();

        expect(tri.render('blue')).toEqual(
          `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
        );
      });
  });
  describe("square", () => {
    it("should return svg for square",
      () => {
        const rect = new Square();

        expect(rect.render('blue')).toEqual(
          `<rect x="60" y="20" width="200" height="200" fill="blue"/>`
        );
      });
  });

});