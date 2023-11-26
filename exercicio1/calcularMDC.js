function calcularMDC(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

module.exports = calcularMDC;