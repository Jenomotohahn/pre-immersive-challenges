module.exports = function findUniqueNum(strOfNums) {
  // write your code in here

  var numArr = strOfNums.split(' ');
  var evenOddArr =[];
  
  for (var i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 === 0){
      evenOddArr.push('0')
    } else{
      evenOddArr.push('1');
    }
  }
  
  for (var i = 0; i < evenOddArr.length; i++){
    if ((evenOddArr[i] === evenOddArr[i +1]) && (evenOddArr[i] === evenOddArr[i +2])){
      continue;
    } else if((evenOddArr[i] !== evenOddArr[i+1]) && ((evenOddArr[i]) === evenOddArr[i +2])){
      return evenOddArr.indexOf(evenOddArr[i+1]);
    } else if((evenOddArr[i] === evenOddArr[i+1]) && ((evenOddArr[i] !== evenOddArr[i+2]))){
      return evenOddArr.indexOf(evenOddArr[i+2]);
    } else{
      return evenOddArr.indexOf(evenOddArr[i]);
    }
  }

} 