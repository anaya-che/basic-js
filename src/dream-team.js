module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  let arr = members.filter((val) => (typeof(val) === 'string'))
  let arr2 = arr.map((val) => val = val.trim().substr(0,1).toUpperCase())

  return arr2.sort().join('');
};