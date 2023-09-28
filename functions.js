// 'use strict'
// const func = () =>{
// console.log(this)
// // no use strict mode - window
// //use strict mode - window
// }

// func()

// function func2(){
//     console.log(this)
//     //no use strict mode - window
//     //use strict mode - undefined
// }

// func2()

// return
//return - возвращает значени ф-ции
document.querySelector(".btnSub").addEventListener("click", ()=>{
    let userYear = +document.querySelector(".inputYear").value
    if(userYear < 999) return;
    if(userYear === null) return;
    document.querySelector(".output").innerHTML = new Date().getFullYear() - userYear
    document.querySelector(".inputYear").value = null;
    })

    // НЕЛЬЗЯ ПЕРЕНОСИТЬ RETURN 
    //a;

    // МОЖНО ТАК: return(
    // a
    // )

    //2

    //Создайте функцию, которая принимает строку в качестве аргумента и возвращает её в обратном порядке.



    // function f2(str){
    //     return str.split('').reverse().join("")
    // }
    // console.log(f2('Frontend'))

    //3
    //Напишите функцию, которая принимает массив чисел и возвращает сумму всех положительных чисел в массиве.
    // array.reduce((accumulator, currentValue)=>{}, initialValue)
    // callback
    // Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
    
    // accumulator
    // Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
    
    // currentValue
    // Текущий обрабатываемый элемент массива.
    
    // indexНеобязательный
    // Индекс текущего обрабатываемого элемента массива.
    
    // arrayНеобязательный
    // Массив, для которого была вызвана функция reduce.
    
    // initialValueНеобязательный
    // Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
    // function f3(arr){
    //     const arrFilter = arr.filter(item=>item>0)
    //     const sumVal = arrFilter.reduce((prev, curr)=>{
    //         return prev+curr
    //     }, 0)
    //     return sumVal
    // }
    
    // console.log(f3([1, 25, -5, 13, 203]))

//4
// Создайте функцию, которая проверяет, является ли переданное число четным, и возвращает true, если число четное, и false, если нечетное.

// function f4(num){
//     if(num % 2 === 0){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(f4(2)+1) // 2
// console.log(f4(7)) // false
// console.log(f4(202)) // true

//5
//Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки,
//  длина которых больше 5 символов.
// function f5(arr){
// const newStrArr = arr.filter(item=>item.length>5)
// return newStrArr
// }

// console.log(f5(["Hel", "World", "Button", "!", "Tiger", "LightBlue"]))

//6
//Создайте функцию, которая принимает строку и возвращает количество гласных букв в ней.
// const str = "HELlo WOrLd"
// console.log(str.match(/[A-Z]/g).join(""))

// function f6(str){
// let newStr = str.match(/[A-Z]/g).join("")
// return newStr.length
// }
// console.log(f6("HELlo WOrLd"))

//7
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только числа, которые делятся на 3 без остатка.

// function f7(arr){
//     let newArr = arr.filter(item=>item%3===0)
//     return newArr
// }
// console.log(f7([12, 7, 8, 9, 15, 87]))

//8
// У вас есть массив чисел от 1 до n, в котором одно число отсутствует.
//  Напишите функцию findMissingNumber(arr), которая принимает этот массив и возвращает пропущенное число.



// function f8(arr){
//     // Создаем переменную num
//     let num;
//     // Создаем цикл, с помощью которого можем использовать индексы эл. массива для последующих действий
//     for (let i = 0; i < arr.length - 1; i++) {
//         //Сравниваем если след.эл не равняется текущий эл. + 1
//         if (arr[i + 1] !== arr[i] + 1) {
//             // Если true, то записывается сумма(текущий элемент + 1) в переменную num
//             num = arr[i] + 1;
            
//             break; // заканчиваем поиск такого числа оператором break
//         }
//         }
//         return num; // возвращаем значение переменной num с помощью оператора return
// }
// console.log(f8([1, 2, 3, 4, 6, 7])) // 5

//-------------------ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// Функции высшего порядка — это функции, которые работают с другими функциями,
//  либо принимая их в виде параметров, либо возвращая их. Проще говоря, функцией высшего порядка
//   называется такая функция, которая принимает функцию как аргумент или возвращает функцию в виде выходного значения.

// 1
// Напишите функцию, которая принимает массив чисел
//  и функцию-предикат, а затем возвращает новый массив,
//   содержащий только те элементы, для которых предикат возвращает true.

// function f1(arr){
//     let newArr=[];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// function f2(arr, filter){
//     let newArr=[];
//     newArr = filter(arr)
//     return newArr
// }

// console.log(f2([2, 3, 14, 17, 1, 18], f1))

//call, apply, bind, this

// В JavaScript, метод call() используется для вызова функции с заданным значением
//  this и передачи аргументов в эту функцию в явном виде. 
// Этот метод позволяет установить контекст выполнения функции (значение this) и передать аргументы одновременно. 
// Синтаксис метода call() выглядит следующим образом:


//функция.call(контекст, аргумент1, аргумент2, ...);

// Где:

// функция - это функция, которую вы хотите вызвать.
// контекст - это значение this, которое будет использоваться внутри функции, когда она вызывается с помощью call().
// аргумент1, аргумент2, и так далее - это аргументы, которые вы хотите передать в функцию.
// Пример использования метода call():

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// function sayHello() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// }

// sayHello.call(person); // Вызываем функцию sayHello с контекстом person
// В этом примере call() используется для вызова функции sayHello() с контекстом объекта person, что позволяет функции обратиться к свойствам firstName и lastName объекта person.

// Кроме метода call(), в JavaScript также существует методы apply() и bind(), которые позволяют устанавливать контекст выполнения функции и передавать аргументы, но имеют некоторые различия в синтаксисе и поведении.


// const nums = {
//     num1: 203,
//     num2: 107
// }
// const arrWithNums = [14, 2]

// function add(a, b){
//     return (a * (this.num1 + this.num2))/b
// }

// console.log(add.call(nums, 5, 10)) // 155

//Метод apply() вызывает функцию с указанным значением this и аргументами,
// предоставленными в виде массива (либо массивоподобного объекта (en-US)).

// console.log(add.apply(nums, arrWithNums)) // 2170


// bind() - это метод в JavaScript, который используется для создания новой функции с определенным значением this и,
 //по желанию, предопределенными аргументами. Он не вызывает функцию сразу, как call() или apply(), а возвращает новую функцию,
//  которую можно вызвать позже.

// Синтаксис метода bind() выглядит следующим образом:

// javascript
// Copy code
// новая_функция = функция.bind(контекст, [аргумент1, аргумент2, ...]);
// Где:

// функция - это функция, для которой вы хотите установить контекст this.
// контекст - это значение this, которое будет использоваться внутри новой функции.
// [аргумент1, аргумент2, ...] - необязательные аргументы, которые будут предопределены в созданной функции.
// Пример использования метода bind():

// javascript
// Copy code
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// function sayHello() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// }

// // Создаем новую функцию, которая всегда будет иметь контекст person
// const sayHelloToPerson = sayHello.bind(person);

// // Вызываем новую функцию
// sayHelloToPerson(); // Вывод: "Hello, John Doe"
// В этом примере мы создали новую функцию sayHelloToPerson, которая всегда будет иметь контекст объекта person, 
// независимо от того, как она вызывается. Мы можем вызвать эту новую функцию, и она будет использовать контекст person для доступа к 
//его свойствам.

// bind() полезен, когда вы хотите создать функцию с постоянным контекстом this, 
// // чтобы передать ее как обработчик события или использовать в других местах, где контекст может изменяться.
// let person = {
//     firstName: "Renata",
//     lastName: "Kovalova", 
//     age: 15
// }
// let count =0;
// function increment(){
// count++
// console.log(`${this.lastName} ${this.firstName}: ${count}`)
// }

// const incrementFunc = increment.bind(person)
// for(let i = 0; i < person.age; i++){
//     incrementFunc()
// Kovalova Renata: 1
// Kovalova Renata: 2
// Kovalova Renata: 3
// Kovalova Renata: 4
// Kovalova Renata: 5
// Kovalova Renata: 6
// Kovalova Renata: 7
// Kovalova Renata: 8
// Kovalova Renata: 9
// Kovalova Renata: 10
// Kovalova Renata: 11
// Kovalova Renata: 12
// Kovalova Renata: 13
// Kovalova Renata: 14
// Kovalova Renata: 15
// }

//1

//Изменение this в обработчике события с bind():
//Создайте элемент HTML <button> и назначьте ему обработчик события click. Используйте метод bind(), 
//чтобы связать функцию-обработчик события с определенным контекстом.

// let count = {
//     count: 0
// }

// function increment(){
// this.count++
// return this.count
// }

// const f = increment.bind(count)

// document.querySelector(".increment-btn").addEventListener("click",(e)=>{
// e.target.innerHTML = f()
// });

//2
// Привязка функции к объекту с bind():
// Создайте объект car с методом start, который выводит сообщение о запуске.
// Используйте метод bind() для создания функции startCar, привязанной к объекту car, и вызовите ее.

// const car = {
//     start(){
//         console.log('car started')
//     }
// }

// const startCar = car.start.bind(car)
// startCar()

//3

// Применение функции с динамическими аргументами с apply():
// Напишите функцию findMax, которая находит максимальное значение из массива чисел.
// Используйте метод apply(), чтобы передавать массив чисел как аргументы.


// function funcMax(){
    
    //         return Math.max.apply(null, this)
    //                             //this - массив как аргумент для ф-ции Math.max(), контекст не используется
    // } 
    
    
    // console.log(funcMax.call(arrNum))
    
//     const arrNum = [32, 1, 13, 43, 89, 7, 11]
// function findMaxN(arr){
// let max = 0;

//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]; 
//     }
//     }

//     return max;
// }

// console.log(findMaxN.apply(null, [arrNum]))

//-------------------рекурсия - вызов функцией самой себя

// let i = 0
// let out = ''
// function f2(){
//     i++
//     out += i + ' '
//     if(i>=30)return;
//     f2()
// }

// f2();
// console.log(out)

//1

// let i = 100
// let sum = 0
// function recursion(){
//     i++
//     sum += i
//     if(i>200) return;
//     recursion()
// }
// recursion()
// console.log(sum) //15251

//2
// let list = [];
// function recursion2(num1, num2){
//     num1 = num1 + 1
// if(num1<num2){
//     list.push(num1)
//     recursion2(num1, num2)
// }
    
// }

// recursion2(1, 15)
// console.log(list)
