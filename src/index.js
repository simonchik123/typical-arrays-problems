
exports.min = function min (array) {  
  return (typeof array === 'undefined' || !array.length) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  return (typeof array === 'undefined' || !array.length) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {

  let reducer = ((accumulator, currentValue) => accumulator + currentValue)
  return (typeof array === 'undefined' || !array.length) ? 0 : array.reduce(reducer) / array.length
  
}
