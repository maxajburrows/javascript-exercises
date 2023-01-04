const reverseString = function(string) {
    let lengthString = string.length;
    let reverseString = ''

    for (let i = (lengthString-1); i >=0; i--) {
        reverseString += string.charAt(i)
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
