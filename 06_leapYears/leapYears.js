const leapYears = function(year) {
    if ((year%4) != 0) {
        return false;
    } else if ((year%100) == 0 && (year%400) != 0) {
        return false
    } else {
        return true
    }

};

/* Can simplify logic to one line
   year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
*/

// Do not edit below this line
module.exports = leapYears;
