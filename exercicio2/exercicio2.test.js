// encontrarIndicesMaiorEMenor.test.js
const encontrarIndicesMaiorEMenor = require('./encontrarIndicesMaiorMenos');

test('Encontrar índices do maior e menor valor em um array não vazio', () => {
  const numeros = [5, 10, 2, 8, 15, 1];
  const indices = encontrarIndicesMaiorEMenor(numeros);

  expect(indices.indiceMaior).toBe(4);
  expect(indices.indiceMenor).toBe(5);
});

test('Lidar com array vazio', () => {
  const numeros = [];
  const resultado = encontrarIndicesMaiorEMenor(numeros);

  expect(resultado).toBe("O array está vazio");
});

test('Lidar com array de um elemento', () => {
  const numeros = [7];
  const indices = encontrarIndicesMaiorEMenor(numeros);

  expect(indices.indiceMaior).toBe(0);
  expect(indices.indiceMenor).toBe(0);
});

test('Lidar com array de dois elementos', () => {
  const numeros = [7, 3];
  const indices = encontrarIndicesMaiorEMenor(numeros);

  expect(indices.indiceMaior).toBe(0);
  expect(indices.indiceMenor).toBe(1);
});
