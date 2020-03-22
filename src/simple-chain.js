const chainMaker = {
  chainArr: [],
  
  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push('( ' + value + ' )');
    
    return this;
  },

  removeLink(position) {
    if (typeof (position) !== 'number' || position <= 0 || position >= this.chainArr.length) { throw new Error()}
    this.chainArr.splice((position-1), 1);
    
    return this;
  },
  
  reverseChain() {
    this.chainArr.reverse();

    return this;
  },

  finishChain() {
    let newChain = this.chainArr.map((el, i, arr) => (i < arr.length - 1) ? el +=  '~~' : el);
    let chainStr = newChain.join('');
    return chainStr;
  }
};

module.exports = chainMaker;
