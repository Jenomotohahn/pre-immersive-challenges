module.exports = function doubleStrChars(str) {
  // write your code in here
  
  var newString = '';
  
  if (typeof str !== 'string'){
    return 'not a string!';
  } else{
    for (var i = 0; i < str.length; i++){
      newString += str.charAt(i)+str.charAt(i);
    }
  }
  return newString;
}