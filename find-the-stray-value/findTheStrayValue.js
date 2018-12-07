module.exports = function findTheStrayValue(array) {
  // write your code in here

  var strayValue = '';

for ( i = 0; i < array.length; i++){
  if (array[i] !== array [i + 1]){
    strayValue = array[i];
  } else{
    continue;
  }
}
return strayValue;
}