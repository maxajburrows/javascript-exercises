const sumAll = function(int1, int2) {
    if (int1 < 0|| int2 < 0) {
        return 'ERROR'
    }
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR'
    } 
    if (int1 > int2) {
        let intTemp = int2;
        int2 = int1;
        int1 = intTemp;
    }
    let sum = 0;
    while (int1 <= int2) {
        sum += int1;
        int1++;
    }
    return sum;
};

sumAll(15, 10)

// Do not edit below this line
module.exports = sumAll;
