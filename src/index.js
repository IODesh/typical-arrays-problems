
exports.min = function min (array) {
  return min.arguments.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return max.arguments.length > 0 ? Math.max(...array) : 0;
}
   
exports.avg = function avg (array) {
  let sum = array.reduce((a, b) => (a + b));
  return avg.arguments.length > 0 ? sum / avg.arguments.length : 0;
}
