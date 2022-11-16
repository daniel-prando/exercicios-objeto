/**
 * Deve-se transformar o objeto em outro, com a quantidade de mensagens que cada um tem
 */

const objetoInicial = {
  3: [
    {
      nome: "Maria",
      mensagens: ["oi", "legal", "top"],
    },
  ],
  2: [
    {
      nome: "Jose",
      mensagens: ["oi", "como está", "interessante", "não sei"],
    },
  ],
  1: [
    {
      nome: "Mario",
      mensagens: ["oi", "massa"],
    },
  ],
};

test("7", () => {
  let novoObjeto;
  // Lógica aqui....

  expect(novoObjeto).toEqual({
    3: 3,
    2: 4,
    1: 2,
  });
});
