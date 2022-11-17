/**
 * Deve-se transformar o objeto em outro com os boletos pendentes de cada usuario,
 * ordenando pelo valor do boleto de cada usuario de forma DESC pelo valor 
 */

const objetoInicial = {
  'jose': {
    boletos: [
      {
        id: 351331,
        valor: 33.1,
        status: "pago",
      },
      {
        id: 2132152,
        valor: 10.1,
        status: "pendente",
      },
    ],
  },
  'maria': {
    boletos: [
      {
        id: 12,
        valor: 130.1,
        status: "pendente",
      },
      {
        id: 153,
        valor: 1129.1,
        status: "pendente",
      },
    ],
  },
  'pedro': {
    boletos: [
      {
        id: 55123,
        valor: 331.1,
        status: "pago",
      },
      {
        id: 123532,
        valor: 1094.1,
        status: "pago",
      },
    ],
  },
};

test("5", () => {
  let novoObjeto;
  // Lógica aqui....

  expect(novoObjeto).toEqual({
    'jose': [
      {
        id: 2132152,
        valor: 10.1,
      },
    ],
    'maria': [
      {
        id: 153,
        valor: 1129.1,
      },
      {
        id: 12,
        valor: 130.1,
      },
    ],
  });
});
