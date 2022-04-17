// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};

// user.name = 'John';

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;

// console.log(user);




// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// function isEmpty() {

//   for (let key in schedule) {
//     return (false);

//   }

//   return (true);

// }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function getSalary() {
//   let sum = 0;

//   for (let key in salaries) {
//     sum += salaries[key];
//   }

//   return sum;
// }

// alert(getSalary());


// //
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции

// // Обратите внимание, что multiplyNumeric не нужно ничего возвращать.Следует напрямую изменять объект.

// //   P.S.Используйте typeof для проверки, что значение свойства числовое.


// function multiplyNumeric(obj) {

//   for (let key in obj) {

//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }

//   }

// }

// console.log(menu)


//У нас есть следующий объект:
// let user = {
//   name: "John",
//   age: 110,
// };
// //Проверьте, что этот объект не пустой и что в нем есть ключ age.


// // function getEmpty(obj) {

// //   alert(`Свойство age сушествует в объекте ${"age" in obj}`);


// //   for (let key in obj) {


// //     return true;

// //   }

// //   return false
// // }

// // alert(getEmpty(user));

// //Получите из объекта obj значение id в констанду id не используя выражение obj.id

// // const obj = {
// //   id: 5,
// //   token: 12343423
// // };

// // let id = obj["id"];

// // console.log(id)



// //Получите из объекта obj значение id и разместите его в константу userId.

// // const obj = {
// //   id: 5,
// //   token: 12343423
// // };

// // let id = obj["id"];

// // const userId = id;

// // console.log(userId)



// // // 
// // 1   Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.
// // 2 Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// // 3 Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
// // 4 Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
// // 5 Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
// // (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().




let city1 = {
  name: "ГородN",
  population: 10000000,
}


let city2 = {
  name: "ГородM",
  population: 1e6,
}

// function getName(obj) {
//   let name = obj.name;

//   return name
// }

// function exportStr(obj) {
//   for (let key in obj) {
//     alert( ${key}=${obj[key]}`)
//   }
// }

// console.log(` Name of city1 ${getName(city1)}`);

// console.log(` Name of city1 ${getName(city2)}`);

// exportStr(city1);

// exportStr(city2);



//5 Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()./ 5 Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

// function getObj(obj) {
//   for (let key in obj) {
//     return this["key"]
//   }
// }

// console.log(getObj(city1))// доделать



