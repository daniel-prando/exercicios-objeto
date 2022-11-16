/**
 * Deve-se transformar o objeto em outro, somando todos os valores de dentro do array
 */

const objetoInicial = {
  chave1: [1, 5, 3, 2, 1],
  chave2: [3.33, 2, 1, 9.32],
  chave3: [1, 3, 2, 4, 5, 1],
  chave4: [4, 3, 2.33, 12],
};

test("2", () => {
  let novoObjeto;
  // Lógica aqui....

  expect(novoObjeto).toEqual({
    chave1: 12,
    chave2: 15.65,
    chave3: 16,
    chave4: 21.33,
  });
});
