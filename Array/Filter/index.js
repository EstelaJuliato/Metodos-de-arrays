//MÉTODOS DE ARRAY:

//FILTER => Devolve um novo array com os elementos
//para os quais a condição se aplica.

//EXEMPLO01:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const evenNumbers = numbers.filter(checkEven);
function checkEven(x) {
  return x % 2 === 0 ? true : false;
}
//console.log(evenNumbers);
//ESPERADO: retornar um array com todos os números que são
//múltiplos de 2, ou seja, pares.

//EXEMPLO02:
const students = [
  {
    name: "Yago Ferreira",
    points: 9,
  },
  {
    name: "Bianca Almeida",
    points: 7,
  },
  {
    name: "Estela Ferreira",
    points: 5,
  },
  {
    name: "Isac Costa",
    points: 6,
  },
  {
    name: "Estefane Carioca",
    points: 8,
  },
];
const aproved = students.filter(function (students) {
  return students.points >= 6;
});
console.log(aproved);
//ESPERADO: retorno das keys e dos values:
// {name: 'Yago Ferreira', points: 9} e
// { name: 'Estefane Carioca', points: 8 }.
