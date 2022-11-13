/* Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [10, 7, 43, 0, null, 24, 0.32, 7.32, undefined, "23", true, NaN];
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {  
        if (arr[i] === 0) {
            zero += 1;
        } else if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
}

console.log(`В массиве: ${zero} нулей, ${even} чётных элементов, ${odd} нечётных элементов`);