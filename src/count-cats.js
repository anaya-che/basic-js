module.exports = function countCats(backyard) {
  let arr = backyard.toString().split(',');
  let arr2 = [];
  arr2 = arr.filter((val) => (val === '^^'))
  return arr2.length;
};
