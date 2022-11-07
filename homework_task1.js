function even_or_odd(number) {
  return number % 2 === 0 ? "Чётное" : "Нечётное";
}

let x = +prompt("введите число", "");

if (isNaN(x)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  console.log(even_or_odd(x));
}