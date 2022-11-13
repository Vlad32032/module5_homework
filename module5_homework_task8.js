/* Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let berries = new Map([
    ["blackberry", "black"],
    ["blueberry", "blue"],
    ["strawberry", "red"],
    ["raspberry", "pink"],
    ["wildberries", "purple"],    
  ]);
  
  for (let elem of berries) {
    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);       
  };