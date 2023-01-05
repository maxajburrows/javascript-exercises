const removeFromArray = function(array, ...remove) {
    let filteredArray = array;
    return filteredArray.filter((element) => !remove.includes(element));
};


// Do not edit below this line
module.exports = removeFromArray;
