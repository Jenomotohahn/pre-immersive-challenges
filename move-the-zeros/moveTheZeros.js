module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
var newArr = [];
var zeroArr = [];

for (var i =0; i < arrNum.length; i++){
  if (arrNum[i] === 0){
    zeroArr.push(arrNum[i]);
  }else{
    newArr.push(arrNum[i]);
  }
}
if(isRight === false){
  var zeroToLeft = zeroArr.concat(newArr);
  return zeroToLeft;
} else if( isRight === true){
  var zeroToRight = newArr.concat(zeroArr);
  return zeroToRight;
  
}

}