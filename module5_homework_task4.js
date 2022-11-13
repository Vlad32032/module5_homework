/* Задание 4.

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

function getRandom(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

let randomInt = getRandom(100);

console.log(randomInt);