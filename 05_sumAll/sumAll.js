const sumAll = function(n1, n2) {
    let sum = 0;

    if (n1 < 0 || n2 < 0 || typeof(n1) != "number" || typeof(n2) != "number") {
        return "ERROR";
    }

    if (n1 > n2) {
        larger = n1;
        smaller = n2;
    } else {
        larger = n2;
        smaller = n1;
    }

    for (let i = smaller; i <= larger ; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
