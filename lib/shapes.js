class Shapes {
    constructor(children=[]) {
        this.children = children;

    }
      render() {
    throw new Error('Child class must implement a render() method.');
  } renderSVG(){
    this.children.forEach(element => {
        if (typeof element !== 'string'){
            return element.render();
        }
        return element;
    })
  }
}

module.exports = Shapes;