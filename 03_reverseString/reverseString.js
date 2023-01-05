const reverseString = function(string) {
    let lengthString = string.length;
    let reverseString = ''

    for (let i = (lengthString-1); i >=0; i--) {
        reverseString += string.charAt(i)
    }
    return reverseString
};

/* Can do in one line:
   string.split('').reverse().join('');
   1) Split the string into an array.
   2) Reverse the array.
   3) Concatenate array into a string again.
*/

// Do not edit below this line
module.exports = reverseString;
