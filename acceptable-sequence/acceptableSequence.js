module.exports = function acceptableSequence(str) {
  // write your code here

  for (var i = 0; i < str.length; i++){
    
    if(/\w/.test(str.charAt(i))){
      if(/\w/.test(str.charAt(0))){
        return false;
      }
      else if (str.charAt(i+1) === '+' && str.charAt(i-1) === '+'){
      return true;
      //create variable hold true or false.
      } else { 
      return false;
      }
    }
  }
}



// var letters = 'abcde..'
// use '.includes' 