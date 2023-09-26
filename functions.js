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