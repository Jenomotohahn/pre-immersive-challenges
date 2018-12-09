module.exports = function insertDashes(num) {
  // write your code in here

newStr = num.toString();
evenDash = '';

for (var i = 0; i < newStr.length; i++){
  if ((newStr.charAt(i+1) === '')){
    evenDash += newStr.charAt(i);
  } else if ((newStr.charAt(i) % 2 === 0) && (newStr.charAt(i + 1) % 2 === 0)){
    evenDash += newStr.charAt(i) + '-';
  } else {
    evenDash += newStr.charAt(i);
  }
} return evenDash;




}