module.exports = function descendingOrder(number) {
  // write code in here
  var newDescenOrder = null
  var newArr = []

  console.log(typeof number);

  if (typeof number === 'number'){
    newArr = Array.from(number.toString()).sort(function(a,b){return b-a});
    newDescenOrder = newArr.join('')ç;
    return newDescenOrder;


    console.log(newArr);
    } 
    else{
      return 'not a number!';
    }
}