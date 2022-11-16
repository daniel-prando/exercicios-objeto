/**
 * Deve-se transformar o objeto em uma string. A ordem das palavras se da pela ordenação ASC das chaves
 * EX: {
 *  2: 'nome é José"
 *  1: 'Olá"
 *  3: 'meu"
 * }
 *
 * deve se transformar em: "Olá meu nome é José"
 */

const objetoInicial = {
  3: "aprendendo",
  4: "a",
  2: "estou",
  5: "manipular",
  6: "objetos",
  1: "Olá",
};

test("4", () => {
  let valor;
  // Lógica aqui....

  expect(valor).toEqual("Olá estou aprendendo a manipular objetos");
});
