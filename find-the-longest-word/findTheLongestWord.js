module.exports = function findTheLongestWord(sen) {
  // write your code in here

  var longestWord = '';

  for (var i = 0; i < sen.length; i++){
    if (sen[i].length > longestWord.length){
      longestWord = sen[i];
    } else {
      continue;
    }

  }
  return longestWord;


}