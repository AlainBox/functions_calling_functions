const calculateAmountVAT = function (basePrice, percentageVAT){
    console.log("Entering calculateAmountVAT"); // Logging, so you can see where JavaScript is working.
    const amountVAT = basePrice * (percentageVAT / 100);
    console.log("Amount VAT:", amountVAT); // Logging, so you can see the amount of VAT before taking it into 'PriceIncludedVAT'.
    return amountVAT;
}

const PriceIncludedVAT = function (basePrice){
    console.log("Entering PriceIncludedVAT"); // Logging, so you can see where JavaScript is working.
    const totalPrice = calculateAmountVAT(3,9) + basePrice;
    return totalPrice;
}; 

console.log(PriceIncludedVAT(3)); // Logging gives '3.27' 
console.log(PriceIncludedVAT(5)); // Logging gives '5.45' (change the 'baseprice-argument' in the calculateAmountVAT-function to 5)
console.log(PriceIncludedVAT(10)); // Logging gives '3.27' (change the 'baseprice-argument' in the calculateAmountVAT-function to 10)
