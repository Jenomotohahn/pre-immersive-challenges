module.exports = function needleInHaystack(haystack) {
  // write code in here

  if(haystack.indexOf('needle') !== -1){
    return haystack.indexOf('needle');
  } else{
    return false;
  }

}