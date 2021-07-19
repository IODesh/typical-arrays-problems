
exports.min = function min (array) {
  return array.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return array.length > 0 ? Math.max(...array) : 0;
}
   
exports.avg = function avg (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
     sum = sum + array[i];
  }
  return sum / array.length; 
}
