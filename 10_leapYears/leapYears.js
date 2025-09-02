const leapYears = function(num) {
    const divideFour = num % 4 === 0;
    const divideCentury = num % 100 === 0;
    const divideFourHundred = num % 400 === 0;

    if(divideFour && (!divideCentury || divideFourHundred)){
        return true;
    }else 
        return false;
};

// Do not edit below this line
module.exports = leapYears;
