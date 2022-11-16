/**
 * Deve-se arredondar o valor das chaves para baixo
 * Ex: 4.01 = 4
 *     3.99 = 3
 */

const objetoInicial = {
  chave1: 34.5,
  chave2: 21.1,
  chave3: 11,
  chave4: 3.99,
  chave5: 4.09,
};

test("1", () => {
  let novoObjeto;
  // Lógica aqui....
  expect(novoObjeto).toEqual({
    chave1: 34,
    chave2: 21,
    chave3: 11,
    chave4: 3,
    chave5: 4,
  });
});
