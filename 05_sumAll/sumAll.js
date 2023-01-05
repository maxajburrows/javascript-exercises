const sumAll = function(int1, int2) {
    if (int1 < 0|| int2 < 0) {
        return 'ERROR'
    }
    if ((typeof(int1) != 'number') || (typeof(int2) != 'number')) {
        return 'ERROR'
    } 
    let sum = 0;
    let lower;
    let upper;
    if (int1 <= int2) {
        lower = int1;
        upper = int2;
    } else {
        lower = int2;
        upper = int1;
    }
    while (lower <= upper) {
        sum += lower;
        lower++;
    }
    return sum;
};

sumAll(3, 10)

// Do not edit below this line
module.exports = sumAll;
