module.exports = function swapLetterCase(str) {
  // write your code in here

  var newStr = '';

  for (var i = 0; i < str.length; i++){
    if((str.charAt(i).toUpperCase() === str.charAt(i)) && (str.charAt(i).match(/[a-z]/i))){
      newStr += str.charAt(i).toLowerCase();
    } else if (((str.charAt(i).toLowerCase() === str.charAt(i))) && ((str.charAt(i).match(/[a-z]/i)))){
      newStr += str.charAt(i).toUpperCase();
    } else if (str.charAt(i) === ' '){
      newStr += ' ';
    } else{
      newStr += str.charAt(i);
    }
  } return newStr;
  
}