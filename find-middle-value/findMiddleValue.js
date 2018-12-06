module.exports = function findMiddleValue(numArray) {
  // write your code in here

  maxNumIdx = numArray.indexOf(Math.max.apply(null,numArray));
  minNumIdx = numArray.indexOf(Math.min.apply(null,numArray));

  console.log(maxNumIdx);
  console.log(minNumIdx);
  
  desiredIndex = (3 - (maxNumIdx + minNumIdx));

  return desiredIndex;

}