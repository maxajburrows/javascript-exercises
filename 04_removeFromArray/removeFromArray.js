const removeFromArray = function(array, ...remove) {
    let filteredArray = array;
    for (let index of remove) {
        filteredArray = filteredArray.filter((element) => element !== index);
    }
    return filteredArray
};


// Do not edit below this line
module.exports = removeFromArray;
