module.exports = function checkAscOrder(numArray) {
  // write your code in here

  var answer = null;


  for (var i = 0; i < numArray.length - 1; i++){
  if (numArray[i] < numArray[i+1]){
    answer =  true;
  }
  else{
    return false;
  }
}return answer;
}