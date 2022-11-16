/**
 * Deve-se transformar o objeto em outro, agrupando os pedidos de cada usuario e ordenando
 * do mais caro ao mais barato
 */

const arrayInicial = [
  {
    pedido: 1,
    valor: 44.6,
    usuario: 3,
  },
  {
    pedido: 2,
    valor: 558.6,
    usuario: 2,
  },
  {
    pedido: 3,
    valor: 1.0,
    usuario: 2,
  },
  {
    pedido: 4,
    valor: 19.1,
    usuario: 1,
  },
  {
    pedido: 5,
    valor: 1.1,
    usuario: 1,
  },
  {
    pedido: 6,
    valor: 13.4,
    usuario: 1,
  },
];

test("6", () => {
  let novoObjeto;
  // Lógica aqui....

  expect(novoObjeto).toEqual({
    1: [
      {
        pedido: 4,
        valor: 19.1,
      },
      {
        pedido: 6,
        valor: 13.4,
      },
      {
        pedido: 5,
        valor: 1.1,
      },
    ],
    2: [
      {
        pedido: 2,
        valor: 558.6,
      },
      {
        pedido: 3,
        valor: 1.0,
      },
    ],
    3: [
      {
        pedido: 1,
        valor: 44.6,
      },
    ],
  });
});
