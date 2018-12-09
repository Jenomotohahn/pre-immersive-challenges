module.exports = function findTheStrayValue(array) {
  // write your code in here


for (var i = 0; i < array.length; i++){
  if((array[i] === array[i+1]) && (array[i] === array[i +2])){
    continue;
  } else if ((array[i] !== array[i + 1]) && (array[i] === array[i + 2])){
    return array[i +1];
  } else if((array[i] === array[i +1]) && (array[i] !== array[i +2])){
    return array[i+2];
  } else{
    return array[i];
   }
  }
 }