const palindromes = function (string) {
    string = string.toLowerCase();
    const arr = string.split('');
    const newArr = arr.filter(letter => {
        return ('abcdefghijklmnopqrstuvwxyz1234567890'.includes(letter));
    })
    let l = 0;
    let r = newArr.length-1;

    while (l < r) {
        if (newArr[l] != newArr[r]) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
