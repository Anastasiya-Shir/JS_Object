// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// let isNumberEqual = (a, b) => a === b;

// alert(isNumberEqual(3, 3))

///Сделайте функцию, которая параметрами принимает 2 числа.Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

// let isSumMorethenTen = (a, b) => a + b > 10;

// alert(isSumMorethenTen(3, 9))

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// let isNumberNegative = n => n < 0;

// alert(isNumberNegative(-5));

// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = '';

// function getString() {
//   for (let i = 1; i < 10; i++) {
//     str += i;
//   }

//   return (str)
// }

// console.log(getString());

//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// function getPyramid() {
//   let str = '';

//   for (let i = 1; i < 21; i++) {
//     str += 'x';
//     console.log(str);
//   }

// }

// getPyramid();

// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Обратите внимание: первый цикл имеет счетчик i, второй j, а если будет еще и третий цикл - то у него счетчик будет переменная k. Это стандартные общепринятые названия, следует пользоваться именно ими.


// function getPyramid() {
//   let str = '';

//   for (let i = 1; i < 10; i++) {
//     for (let j = 1; j <= i; j++) {
//       str = str.concat(i);
//     }

//     console.log(str);
//     str = "";
//   }

// }

// getPyramid();

//
// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

// function getPyramid() {
//   let str = '';

//   for (let i = 1; i < 6; i++) {
//     str = str.concat('xx');
//     console.log(str);
//   }

// }

// getPyramid();

// Давайте выведем на экран следующую пирамидку:
// 111
// 222
// 333
// 444
// 555
// 666


// function getPyramid() {
//   let str = '';
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//       str = str.concat(i);

//     }
//     console.log(str)
//     str = "";
//   }

// }

// getPyramid();



// Пирамидка с цифрами
// Выведем теперь следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// function getPyramid() {
//   let str = '';
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//       str = str.concat(i);
//     }

//     console.log(str)
//     str = "";
//   }

// }

// getPyramid();

// Array tasks

// //Даны два массива: ['a', 'b', 'c'] и ['a', 'b', 'c']. Объедините их вместе.

// let letters = ['a', 'b', 'c'];
// let lettersSecond = ['a', 'b', 'c'];
// let together = [];
// alert(together.concat(letters, lettersSecond));

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 1);
// arr.splice(-1, 1)

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 'a', 'b', 'c');

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// let arr = [3, 4, 1, 2, 7];
// arr.sort();

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let js = {
//   js: 'test',
//   jq: 'hello',
//   css: 'world'
// };

// let listKeys = Object.keys(js);

//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

// let str = '123456';
// let arr = str.split('');
//arr.reverse();
// str = arr.join("");

//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

// let str = 'hello';
// alert(str[0].toUpperCase() + str.slice(1));
// alert(str[0].toUpperCase() + str.substring(1));

//Проверьте, что строка начинается на http://.

// let str = 'http://docs.google.com';
// let check = str.indexOf('http://');

// if (check != -1) {
//   document.write("такая строка есть");
// } else {
//   document.write("такой строки нет");
// }

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr  = [1, 2, 3, 4, 15];
// let check = arr.indexOf(5);

// if (check != -1) {
//   document.write("yes");
// } else {
//   document.write("no");
// }


//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

// function getDevisor(num) {
//   let result = false;
//   for (let i = 2; i < num; i++) {

//     if (num % i == 0) {
//       result = true;
//       break;
//     }

//   }
//   console.log(result)

// }

// getDevisor(8);




//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function getSimilarNumber(arr) {
//   let check = "no";
//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == arr[i + 1]) {
//       check = "yes";
//       break;
//     }
//   }

//   return alert(check);
// }

// getSimilarNumber(arr);

//  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла)

// let arr = [];

// (function getArray() {

//   for (let i = 1; i < 6; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       str = str.concat(i);
//     }

//     arr.push(str);
//   }
//   let k = console.log(arr);

//   return k;
// }())

// 1. Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

//   * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}

// const fillArray = (arraySize, value) => {
//   let array = [];

//   for (let i = 1; i <= arraySize; i++) {
//     array.push(value);
//   }

//   return array
// }

// const data = 8;
// const valueToFill = 'c';

// console.log(fillArray(data, valueToFill)) // ['a', 'a', 'a']

// 2. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

// const reverse = (array) => {
//   let newArray = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray = newArray.concat([array[i]])
//   }

//   return newArray
// }

// const dat = [1, 2, 3];
// console.log(reverse(dat)); // [3, 2, 1]


// 3. Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

//  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

// const compact = (array) => {
//   let newArray = array.filter(Boolean);
//   return newArray;
// }

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]


// 4. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

//   * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
//   * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - массив, значения которого массивы пар
//   * @returns {Array}

// let obj = {};

// const fromPairs = (array) => array.reduce((prev, item) => {
//   console.log(prev)
//   prev = {
//     [item[0]]: item[1],
//   }
//   return Object.assign(obj, prev);
// }, {})

// const dat = [['a', 1], ['b', 2]];
// console.log(fromPairs(dat)) // { 'a': 1, 'b': 2 }

// Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

//   * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}

// const without = (array, ...args) => {
//   console.log(array)
//   let newArray = array;
//   for (let i = 0; i < args.length; i++) {
//     array = array.filter((el) => el !== args[i]);
//   }
//   return array;
// }

// const dat = [1, 2, 3, 1, 2];
// console.log(without(dat, 1, 2)); // [3]

// Unique. Напишите функцию, которая убирает повторяющиеся значения.

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// * Сложность задачи: 2 of 5
// * @param {Array<string | number>} array - Массив с примитивными значениями
// * @returns {Array}
// */

// const unique = (array) => {
//   let newarray = new Set(array)
//   return Array.from(new Set(newarray));
// }

// const dat = [1, 2, 1, 2, 3, 2];
// console.log(unique(dat)); // [1, 2, 3]

// IsEqual.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

//   * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * Сложность задачи: 2 of 5
//     * @param { Array } firstArray - Массив с примитивными значениями
//       * @param { Array } secondArray - Массив с примитивными значениями
//         * @returns { boolean }

// const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length != secondArray.length) return false;

//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] != secondArray[i]) return false;
//     else return true;
//   }
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

// Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

//   * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
//   * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//   * Сложность задачи: 3 of 5
//   * @param {Array} array - Массив элементов
//   * @param {number} size - Размер чанков
//   * @returns {Array}

// const chunk = (array, size) => {
//   let array2 = array.slice(0);
//   let newArray = [];
//   let remains = array.length % size;
//   let a = Math.ceil(array.length / size);

//   for (let i = 1; i <= a; i++) {
//     newArray.push((array2.splice(0, size) || array2.splice(0, remains)));
//   }

//   return newArray;
// }

// const dat = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(dat, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(dat, 3)) // [[1, 2, 3], [4, 5, 6], [7]]



// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// function getSum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {

//     for (let j = 0; j < array[i].length; j++) {
//       sum += array[i][j];
//     }
//   }

//   return sum
// }

// arr = [[1, 2, 3], [4, 5], [6]]
// alert(getSum(arr));

// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.

// let array = [-1, 3, 4, 7, -6, -8, 6, -9];

// function isPositive(item) {
//   if (item >= 0) {

//     return true;
//   } else {

//     return false;
//   }
// }

// let newArray = [];

// for (var i = 0; i <= array.length; i++) {

//   if (isPositive(array[i])) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(num) {
//   let sum = 0;
//   let str = String(num);
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);

//   }

//   return sum;
// }

// alert(getDigitsSum(14));

//  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

const getStringWithUPFirstLetter = str => str.split(' ').map(item => ucfirst(item)).join(' ');

const ucfirst = (item) => item[0].toUpperCase() + item.slice(1);

const str = 'ы изучаю программирование';

document.write(getStringWithUPFirstLetter(str));

// Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный. Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее. (рекурсия)

// let newarray = [];
// function flatten(array) {

//   array.forEach(element => {
//     Array.isArray(element) ? flatten(element) : newarray.push(element);

//   });
// }
// let arr = [[[1, 2], 3], [4, 5], [6, 7], [8, [9, [10]]]];
// flatten(arr);
// console.log(newarray);

// let arr = [1, 2, 3, 54, 2, 344];
// let i = 0;

// function getElement(array) {
//   if (array.length > i) {
//     console.log(array[i]);
//     i++;
//     getElement(array);
//   }
//   return i;
// }

// (getElement(arr));


// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).


// let num = 1567;
// let sum = 0;
// let str = "";


// function getSum(num) {
//   if (num <= 9) {

//     return num;
//   } else if (num > 9) {
//     str = String(num);
//     num = 0;

//     for (let i = 0; i < str.length; i++) {
//       num += +(str[i]);
//     }

//     return getSum(num);
//   } else if (typeof (num) != Number) {

//     throw Error("input only number");
//   }
// }

// console.log(getSum(num));



// Cортиоовка вставкой

// let arr = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]


