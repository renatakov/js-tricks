// Регулярные выражения!
// . - любой одиночный символ
// [ ] - любой из них, диапазоны
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов
// \w - буква
// \W - все кроме букв
// \b - граница слова
// \B - не границ
      
let number = "+38 097-221-17-92"
console.log(number.search(/^\+\d{2}\s\d{3}-\d{3}-\d{2}-\d{2}/))
let email = "renatakov1010@gmail.com"
email.search(/\w\d@gmail\.com/)
let test = "I walk Through The wall"
console.log(test.search(/th/i))

// let inputEmail1 = document.querySelector("#inputMail")
// let inputEmailValue1
// inputEmail1.addEventListener('input', (e)=>{
//     inputEmailValue1 = e.target.value
//     if(inputEmailValue1.match(/\w\d@gmail\.com/)){
//         console.log('True')
//     } else {
//         console.log('False')
//     }

// })
// Квантификация
// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз