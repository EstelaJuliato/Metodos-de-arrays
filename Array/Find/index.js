//MÉTODOS DE ARRAY:

//FIND => Busca um elemento no array dada uma condição
//desejada (função de callback) e devolve o elemento
//caso seja encontrado.
//Porém devolve o primeiro *valor* que satisfaça a
//condição proposta.

//EXEMPLO01:
const ages = [10, 14, 16, 12, 19];
const checkAges = ages.find((element) => element >= 18);

console.log(checkAges);

//EXEMPLO02:
const clients = [
  {
    name: "Yago",
    credit: 1000,
  },
  {
    name: "Bianca",
    credit: 800,
  },
  {
    name: "Estela",
    credit: 50,
  },
];
console.log(clients.find((c) => c.credit > 801));

//FIND INDEX => É semelhante, porém devolve o *índice*
//do primeiro valor do array que satisfaça a condição.

//EXEMPLO:
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf10(element, index, array) {
  return element % 10 == 0;
}
console.log(list.findIndex(multipleOf10));
