//MÉTODOS DE ARRAY:

//MAP => Cria outro array a partir de uma função que que contém um
//critério e/ou condição e devolve os elementos do array que
//correspondem a esse critério.

//EXEMPLO1:
const arr = [3, 4, 5, 6];
const newMap = arr.map(function (element) {
  return element * 3;
});

console.log(newMap); //retorna os números multiplicados por 3

//EXEMPLO02 (array de objetos):
const players = [
  { firstName: "Estela", lastName: "Ferreira" },
  { firstName: "Yago", lastName: "Ferreira" },
  { firstName: "Bianca", lastName: "Almeida" },
];
const playersFullnames = players.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});
console.log(playersFullnames); //retorna os nomes completos dos jogadores

//EXEMPLO3:
const alunos = [
  { name: "Yago", age: 25 },
  { name: "Bianca", age: 20 },
];
const oldest = alunos.map(function (element) {
  return { name: element.name, age: element.age >= 21 };
});
console.log(oldest);
