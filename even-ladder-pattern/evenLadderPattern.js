module.exports = function evenLadderPattern(num) {
  // write your code in here

var newString = '';

if (num <= 1){
  return '';
} else {
  for (var i = 2; i <= num; i++){
    if ((num - i) >= 2){
    newString += String(i).repeat(i) + '\n';
    i += 1;
    }else{
      newString += String(i).repeat(i);
    i += 1;
    }
  }return newString;
}
}
