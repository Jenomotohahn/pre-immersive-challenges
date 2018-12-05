module.exports = function checkAscOrder(numArray) {
  // write your code in here
for (var i = 0; i < numArray.length; i++){
  if (numArray[i] < numArray[i+1]){
    return true;
  }
  else{
    return false;
  }
}
}