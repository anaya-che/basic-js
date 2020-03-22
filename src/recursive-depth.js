module.exports = class DepthCalculator {
    calculateDepth(arr) {  
        let n = 0;
  
        arr.forEach((val) => {
            if (Array.isArray(val)) {
              n = Math.max(this.calculateDepth(val), n);
            }
          })
          return n + 1;
    }
};