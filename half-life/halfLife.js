module.exports = function halfLife(initialQuantity, quantityRemaining, time) {

    return (((time*(Math.log(.5))/ Math.log(quantityRemaining/initialQuantity))));
  
}
