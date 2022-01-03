const calculateAmountVAT = function(totalPrice, percentageVAT){
    const amountVAT = totalPrice - (totalPrice / ((percentageVAT / 100) + 1));
    return amountVAT;
};

const mainCalculation = function(totalPrice){
    const amountVAT = calculateAmountVAT(1210, 21);
    const basePrice = totalPrice - amountVAT;
    return [Math.round(basePrice), Math.round(amountVAT)]; // Added Math.round twice for better readability.
};

console.log(mainCalculation(1210)); // Logging gives '[1000, 210]'
console.log(mainCalculation(1500)); // Logging gives '[1240, 260]' (change 'totalPrice' to 1500 inside of the 'mainCalculation-function').
