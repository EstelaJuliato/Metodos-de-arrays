//MÉTODOS DE ARRAY:

//REDUCE => Neste método, é aplicada uma função com
//os seguintes parâmetros: 'previousValue', 'currentValue',
//'index' e 'array', sendo 'index' e 'array' opcionais.
//A função devolve um valor que será somado à um acumulador o qual
//será devolvido depois que o método 'reduce' parar de executar.

//EXEMPLO01:

const numbers = [20, 40, 60, 80, 100];
const reduce = numbers.reduce((previous, current) => previous + current, 0);
console.log(reduce);
//ESPERADO: soma dos valores do array = 300

//EXEMPLO02:
const students = [
  { name: "Yago", age: 25, gender: "male" },
  { name: "Bianca", age: 20, gender: "female" },
  { name: "Estela", age: 21, gender: "female" },
  { name: "Estefane", age: 26, gender: "female" },
  { name: "Isac", age: 13, gender: "male" },
  { name: "Samuel", age: 20, gender: "male" },
  { name: "Luiz", age: 30, gender: "male" },
  { name: "Emma", age: 2, gender: "female" },
];

const studentsObj = students.reduce((obj, student) => {
  obj[student.name] = student.gender;
  return obj;
}, {});
console.log(studentsObj);
//ESPERADO: um objeto contendo a lista com os nomes e os gêneros.
