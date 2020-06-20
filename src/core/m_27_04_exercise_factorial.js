function calculateFactorial(number) {
    let factorial = 1;

    for (var i = 0; i < number; i++) {
        factorial += factorial * i;
    }

    return factorial;
}

module.exports = calculateFactorial;