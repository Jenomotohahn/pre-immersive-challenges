module.exports = function reverseMessage(str) {
  // write your code in here

 var finalStr = '';

 for( var i = 0; i < str.length; i++){
    if ((i === str.length - 1) || ((str.charAt(i + 1) === ' ') && (i !== 0))){
      finalStr = str.charAt(i).toUpperCase() + finalStr;
    } else {
      finalStr = str.charAt(i).toLowerCase() + finalStr;

    } 
  }return finalStr;

}



