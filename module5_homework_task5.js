/* Задание 5.

Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

let randomArray = [1, 2, 3, 4, 5];

console.log(randomArray.length);

let result = randomArray.map(function(item) {
  console.log(item);
});