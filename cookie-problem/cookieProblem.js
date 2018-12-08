module.exports = function cookieProblem(array) {
  // write your code in here

 var largestNum = Math.max.apply(null,array);
 // or do Math.max(...array);
// apply bind and call?????
 var totalCookies = 0;

for (var i = 0; i <array.length; i++){
  totalCookies += (largestNum - array[i]);
  console.log(totalCookies);
}
return totalCookies;
}








