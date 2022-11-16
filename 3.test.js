/**
 * Deve-se transformar o objeto em outro, ordenando as chaves de acordo com o valor
 * EX: {
 *  chave1: 2,
 *  chave2: 1
 * }
 * 
 * transformar em 
 * 
 * {
 *  chave2: 1
 *  chave1: 2,
 * }
 */

const objetoInicial = {
  chave1: 6,
  chave2: 1,
  chave3: 4,
  chave4: 5,
  chave5: 3,
  chave6: 2,
};

test("3", () => {
  let novoObjeto;
  // Lógica aqui....

  expect(novoObjeto).toEqual({
    chave2: 1,
    chave6: 2,
    chave5: 3,
    chave3: 4,
    chave4: 5,
    chave1: 6,
  });
});
