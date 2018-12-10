module.exports = function vowelCount(str) {
  // write your code in here

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var countVowels = 0;

  for (var i = 0; i < str.length; i++){
    if((vowels.indexOf(str.charAt(i)) !== -1)){
      countVowels += 1;
    } else{
      continue;
    }
  } return countVowels;
}