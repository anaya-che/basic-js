import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainArr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.chainArr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (value === undefined && value !== null) {
      value = ' ';
    }
    this.chainArr.push(value);
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (typeof (position) !== 'number' || position <= 0 || position >= this.chainArr.length) {
      this.chainArr = []; 
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice((position-1), 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let chainStr = '';
    this.chainArr.forEach((el, i, arr) => (i < (arr.length - 1)) ? chainStr += '( ' + el + ' )' + '~~' :  chainStr += '( ' + el + ' )');
    this.chainArr = [];
    return chainStr;
  }
};
