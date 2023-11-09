const fibonacci = function(num) {
    num = Number(num);
    if (num <= 0) {
        return "OOPS";
    }

    num1 = 1;
    num2 = 1;
    if (num == 1 || num == 2) {
        return 1;
    }

    for (let i = 3; i < num; i++) {
        tmp = num1;
        num1 = num2;
        num2 = tmp + num2;
    }

    return num1 + num2;
};

// Do not edit below this line
module.exports = fibonacci;
