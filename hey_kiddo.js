const greet = function(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

const adultCheck = function(age){
    greet(age);
    if(age >= 18){
        return "Hello there"
    } else{
        return "Hey kiddo"
    }
}

console.log(adultCheck(20)); // Logging gives 'Hello  there'
console.log(adultCheck(15)); // Logging gives 'Hey kiddo'
console.log(adultCheck(18)); // Logging gives 'Hello  there'
