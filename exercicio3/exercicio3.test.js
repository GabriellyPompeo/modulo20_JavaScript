// somaMultiplos.test.js
const somaMultiplosDe5e7AbaixoDe1000 = require('./somaMultiplisDe5e7AbaixoDe1000');

test('Soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
  const resultado = somaMultiplosDe5e7AbaixoDe1000();

  // Resultado esperado calculado manualmente ou por outra fonte confiável
  expect(resultado).toBe(156361);
});

test('Soma dos múltiplos de 5 ou 7 abaixo de 1000 (com precisão)', () => {
  const resultado = somaMultiplosDe5e7AbaixoDe1000();

  // Use toBeCloseTo para comparar números de ponto flutuante
  expect(resultado).toBeCloseTo(156361, 2);
});
