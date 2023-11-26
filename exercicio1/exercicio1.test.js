// calcularMDC.test.js
const calcularMDC = require('./calcularMDC');

test('MDC de 48 e 18 deve ser 6', () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

test('MDC de 0 e 5 deve ser 5', () => {
  expect(calcularMDC(0, 5)).toBe(5);
});

test('MDC de 15 e 0 deve ser 15', () => {
  expect(calcularMDC(15, 0)).toBe(15);
});

test('MDC de 0 e 0 deve ser 0', () => {
  expect(calcularMDC(0, 0)).toBe(0);
});

test('MDC de 17 e 5 deve ser 1', () => {
  expect(calcularMDC(17, 5)).toBe(1);
});
