module.exports = function countByMultiples(length, x) {
  // write your code in here
var newMultipleArr = [x];
var newNum = x;

for( var i = 0; i < (length - 1); i++){
  newNum += x
  newMultipleArr.push(newNum);
}
return newMultipleArr;
}