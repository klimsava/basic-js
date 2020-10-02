const CustomError = require("../extensions/custom-error");

module.exports = chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);

    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() || typeof position !== 'number'){
      this.result = [];
      throw Error('No position');
    }

    this.result.splice(position-1, 1);

    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finalArr = this.arr.map(item => `( ${item} )`);
    this.arr = [];
    return finalArr.join('~~');
  }
};