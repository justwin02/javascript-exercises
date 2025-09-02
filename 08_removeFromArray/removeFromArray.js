const removeFromArray = function(arr, ...num) {
    const newArray = arr.filter(item => !num.includes(item))
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
