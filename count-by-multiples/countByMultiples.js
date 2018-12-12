module.exports = function countByMultiples(length, x) {
  // write your code in here
var newMultipleArr = [];
var newNum = 0;

for( var i = 0; i < length; i++){
  newNum += x
  newMultipleArr.push(newNum);
}
return newMultipleArr;
}