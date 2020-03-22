module.exports = function getSeason(date) {
  const months = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.toTimeString() === false){
    throw new Error();
  }
  let monthNum = date.getMonth();
  let season = months.filter((val, i, arr) => (i === monthNum))
  return season;
};
