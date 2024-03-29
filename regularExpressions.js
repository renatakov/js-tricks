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

// В JavaScript регулярные выражения (Regular Expressions) поддерживают различные флаги (modifiers), 
// которые изменяют поведение сопоставления. Флаги указываются после закрывающего слеша (`/`) в конце 
// регулярного выражения.

// Вот некоторые из наиболее часто используемых флагов:

// 1. `g` (глобальный поиск):
//    Этот флаг позволяет выполнить глобальный поиск всех совпадений вместо первого. Если флаг `g` не указан, 
// поиск остановится после первого совпадения.

// 2. `i` (игнорирование регистра):
//    Флаг `i` позволяет производить поиск без учета регистра. Например, `/apple/i` будет находить и 
// "apple" и "Apple".

// 3. `m` (многострочный поиск):
//    Флаг `m` позволяет производить поиск по нескольким строкам. Он используется, когда вы хотите искать 
// совпадения в многострочных текстах.

// 4. `s` (доталльный режим, dotall):
//    Флаг `s` позволяет символу `.` (точке) совпадать с символом новой строки (`\n`). 
// По умолчанию, `.` не совпадает с символами новой строки.

// 5. `u` (юникодный режим):
//    Флаг `u` используется для работы с юникодными символами в регулярных выражениях.

// 6. `y` (сопоставление с начала последнего совпадения):
//    Флаг `y` выполняет поиск с начала последнего совпадения. Он используется совместно с методом `exec()`.

// 7. `d` (отладочный режим):
//    Флаг `d` позволяет добавить комментарии и пробелы в регулярное выражение для улучшения его читаемости. 
// Этот флаг не является стандартом и поддерживается не всеми браузерами.
// let number = "+38 097-221-17-92"
// console.log(number.search(/^\+\d{2}\s\d{3}-\d{3}-\d{2}-\d{2}/))
// let email = "renatakov1010@gmail.com"
// email.search(/\w\d@gmail\.com/)
// let test = "I walk Through The wall"
// let multiplyString = "I walk through the wall. I saw a portal. I walked through the portal"
// let regExp = /through/gs
// console.log(multiplyString.search(/through/sg))
// console.log(test.search(/th/i))
// console.log(regExp.exec(multiplyString))
// console.log(regExp.exec(multiplyString))

// const obj = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
// }

// let a = 1

// while(a <= 5){
//     a++
//     console.log(a)
// }

// for(let key in obj){
//     console.log(obj[key])
//     // jake, 21, jake123@gmail.com
// }

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


// const alphabet = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26
//   }

//   function alphabetPosition(text) {
//     let str = ""
//     for(let i = 0; i < text.length; i++){
//         for(let key in alphabet){
//             if (text[i].toLowerCase() === key){
//                 str += `${alphabet[key]}  `
//             }
//         }
//     }
//     return str
//   }

//   console.log(alphabetPosition("The sunset sets at twelve o' clock.")) 
//   //20  8  5  19  21  14  19  5  20  19  5  20  19  1  20  20  23  5  12  22  5  15  3  12  15  3  11
//------------------------------------------

// function digPow(n, p) {
//     const s = n.toString();
//     let total = [];
//     let sum = 0
//     for (let i = 0; i < s.length; i++) {
//         const digit = parseInt(s[i], 10);
//         total.push(Math.pow(digit, p));
//         p++;
//     }
//     total.reduce((acc, currVal)=>{
//         sum = acc + currVal
//         return sum
//     }, 0)
//     if(sum % n == 0){
//         return sum / n
//     } else{
//         return -1
//     }
// }

// console.log(digPow(695, 2))



// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

//digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// --------------------------------------------

// function openOrSenior(data){
//     for(let i = 0; i < data.length; i++){
//             if(data[i][0] >= 55 && data[i][1] >7){
//                 data[i] = "Senior"
//             } else {
//                 data[i] = "Open"
//             }

//         }
//         return data
// }

// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))

//-----------------------------------------------

// function sumTwoSmallestNumbers(numbers) {
//     let arr = []
//     let total = 0
//     numbers.sort((a, b)=>a-b)
//         arr = numbers.slice(0,2)
//         arr.reduce((acc, currVal)=>{
//             total = acc + currVal
//             return total
//         }, 0)

//         return total

//   }

//   console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10

// function persistence(num, i = 0) {
//     let n1 = 1;
//     const arr = [...num.toString()]
//     const newArr = arr.map((item)=> {return +item})
//     if(num <= 9){
//         return i
//     }
//     newArr.reduce((acc, cur)=>{
//         n1 = acc * cur
//         return n1
//     },n1)
//     if (n1 > 9) {
//         return persistence(n1, i+1);
//     } else {
//         return i+1
//     }
// }

// console.log(persistence(999)) // 4

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//-------------------------------------------------

// function solution(number){
//     let arr = []
//     let sum = 0
//     for(let i = 1; i < number; i++){
//         arr.push(i)
//     }
//     arr.filter(item => item % 3 === 0 || item % 5 === 0).reduce((acc, cur)=>{
//         sum = acc + cur
//         return sum
//     }, sum)
//     return sum
// }

// console.log(solution(16))

// ------------------------------------------------

// function DNAStrand(dna){
//     let newStr = ""
//     const dnaObj = {
//         A: 'T',
//         T: 'A',
//         C: 'G',
//         G: 'C'
//     }
//     for(let i = 0; i < dna.length; i++){
//         for(let key in dnaObj){
//             if(dna[i] === key){
//                 newStr+=dnaObj[key]
//             }
//         }
//     }
//     return newStr
// }

// console.log(DNAStrand("ATTGC"))

//-------------------------------------------------

// function XO(str) {
//     const xLength = (str.match(/x/ig) || []).length;
//     const oLength = (str.match(/o/ig) || []).length;
//     return xLength === oLength || xLength === 0 && oLength === 0;

// }

// console.log(XO("xoxo")) // true

// ---------------------------------------------

// function generateHashtag (str) {
//     if(str === undefined || str.trim() == ""){
//         return false
//     } else {
//         let newStr = str.split(" ")
//         for(let i = 0; i < newStr.length; i++){
//             newStr[i] = `${newStr[i].charAt().toUpperCase()}${newStr[i].slice(1, newStr[i].length)}`
//             if(newStr[i].length >= 140){
//                 return false
//             }
//         }
//         return `#${newStr.join('')}`
//     }
// }

// console.log(generateHashtag(" ".repeat(121)))

//----------------------------------------------

// let str = "to-camel_case".replace(/-|_/g, "")
// console.log(str.match(/^\w|\b[A-Z]\b|/))

// function toCamelCase(str){
//     let newStr = str.replace(/[-_\s](.)/g, (match, group)=>group.toUpperCase())
//     return newStr
// }

// console.log(toCamelCase("to camel-case")) // toCamelCase


// match: Это подстрока, которая соответствует всему совпадению в регулярном выражении. В вашем случае, 
// это будет подстрока, которая соответствует символу и его окружению (символ после "-", "_", или пробела).

// group (или groups): Это подстрока (или объект с группами), которая соответствует захватывающей группе в регулярном выражении. 
// В вашем случае, это будет символ после "-", "_", или пробела (захваченный с помощью (.)).

// В выражении (match, group) => group.toUpperCase(), используется стрелочная функция, которая принимает match и group в качестве 
// параметров и возвращает group.toUpperCase(). Таким образом, она преобразует захваченный символ в верхний регистр и использует 
// этот результат для замены в строке.

// Шаблон	Тип	Співпадіння
// X(?=Y)	Позитивна перевірка уперед	X якщо за ним йде Y
// X(?!Y)	Негативна перевірка уперед	X якщо за ним не йде Y
// (?<=Y)X	Позитивна перевірка назад	X якщо він йде після Y
// (?<!Y)X	Негативна перевірка назад	X якщо тільки він не йде після Y

// --------------------------------------------

// function moveZeros(arr) {
//     let nonZeros = arr.filter(item => item !== 0);
//     let zeros = arr.filter(item => item === 0);

//     return nonZeros.concat(zeros);
// }


// console.log(moveZeros(['3', '7', false, 9, '9', '7', 1, [], '0', [], '8', '3', 3, null, 0]))

//-----------------------------

// function pigIt(str){
//     let newStr = str.split(' ')
//     let arr1 = newStr.map((item, i)=>{
//         if (/[-_\s\!\?\#]/.test(item)) {
//             return item;
//         } 
//         else{
//             item = item.slice(1) + item[0] + "ay"
//             return item
//         }
//         })
//     return arr1.join(" ")
//   }

//   console.log(pigIt("O tempora o mores !"))

//-----------

// function longestSlideDown(pyramid){
//     if(pyramid.length === 0){
//         return;
//     }
// let sum = 0;
// for(let i = 0; i < pyramid.length; i++){
//         sum += pyramid[i][i]
// }
// return sum
// }

// console.log(longestSlideDown(
//  [[75],
//   [95, 64],
//   [17, 47, 82],
//   [18, 35, 87, 10],
//   [20,  4, 82, 47, 65],
//   [19,  1, 23, 75,  3, 34],
//   [88,  2, 77, 73,  7, 63, 67],
//   [99, 65,  4, 28,  6, 16, 70, 92],
//   [41, 41, 26, 56, 83, 40, 80, 70, 33],
//   [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//   [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//   [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//   [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//   [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//   [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]))

// ---------------------------
// var isPP = function(n){
//     for(let m = 2; m <= Math.sqrt(n); m++){
//         let k = 2;
//         while(Math.pow(m, k) <= n){
//             if(Math.pow(m, k) === n){
//                 return [m, k]
//             }
//             k++
//         }
//     }
//     return null
//   }

//   console.log(isPP(4))

//-----------------------------------

// var lastDigitF = function(str1, str2){
//     if(isNaN(str1) || isNaN(str2)){
//         return null
//     }
//     str1 = +str1;
//     str2 = +str2;
//     let pow = Math.pow(str1, str2).toString();
//     let lastDigit = pow[pow.length - 1];
//     return +lastDigit
// };

// console.log(lastDigitF(3, 9));

// -----------------------------
// function humanReadable(seconds) {
//     if (seconds > 359999 || seconds === undefined || isNaN(seconds)) {
//         return '';
//     } else {
//         const time = {
//             hours: Math.floor(seconds / 3600),
//             minutes: Math.floor((seconds % 3600) / 60),
//             seconds: Math.floor(seconds % 60)
//         };
//         for (const key in time) {
//             if(time[key] < 10){
//                 time[key] = `0${time[key]}`
//             }
//         }
//         return `${time.hours}:${time.minutes}:${time.seconds}`;
//     };

// };

// console.log(humanReadable(90))

// -------------------------------------

// function sumStrings(a, b) {
//         return String(BigInt(a)+BigInt(b));
//     }

// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))


// --------------------------------

// function permutations(str) {
//     const result = new Set();

//     function generatePermutations(current, remaining) {
//         if (remaining.length === 0) {
//             result.add(current);
//             return;
//         }
//         for (let i = 0; i < remaining.length; i++) {
//             const newCurrent = current + remaining[i];
//             const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
//             generatePermutations(newCurrent, newRemaining);
//         }
//     }

//     generatePermutations('', str);
//     return Array.from(result);
// }

// console.log(permutations('abc'));

// Первая итерация (i = 0):

// newCurrent = '' + 'a' = 'a'
// newRemaining = 'bc' (удалили символ 'a' из 'abc')
// Рекурсивный вызов: generatePermutations('a', 'bc')
// Вторая итерация (i = 1):

// newCurrent = 'a' + 'b' = 'ab'
// newRemaining = 'c' (удалили символ 'b' из 'bc')
// Рекурсивный вызов: generatePermutations('ab', 'c')
// Третья итерация (i = 0 в рекурсии):

// newCurrent = 'ab' + 'c' = 'abc'
// newRemaining = '' (удалили символ 'c' из 'c')
// Рекурсивный вызов: generatePermutations('abc', '')
// Возврат из рекурсии:

// Функция завершается, и результат 'abc' добавляется в result.
// Возврат из второй итерации рекурсии:

// Теперь вторая итерация завершилась, и результат 'ab' добавляется в result.
// Третья итерация (i = 2 в рекурсии):

// newCurrent = 'a' + 'c' = 'ac'
// newRemaining = 'b' (удалили символ 'c' из 'bc')
// Рекурсивный вызов: generatePermutations('ac', 'b')
// Четвертая итерация (i = 0 в рекурсии):

// newCurrent = 'ac' + 'b' = 'acb'
// newRemaining = '' (удалили символ 'b' из 'b')
// Рекурсивный вызов: generatePermutations('acb', '')
// Возврат из четвертой итерации рекурсии:

// Теперь четвертая итерация завершилась, и результат 'acb' добавляется в result.
// Возврат из второй итерации рекурсии (продолжение):

// Теперь результат 'acb' добавляется в result.
// Пятая итерация (i = 1 в основной функции):

// newCurrent = '' + 'b' = 'b'
// newRemaining = 'ac' (удалили символ 'b' из 'abc')
// Рекурсивный вызов: generatePermutations('b', 'ac')
// Шестая итерация (i = 0 в рекурсии):

// newCurrent = 'b' + 'a' = 'ba'
// newRemaining = 'c' (удалили символ 'a' из 'ac')
// Рекурсивный вызов: generatePermutations('ba', 'c')
// Седьмая итерация (i = 0 в рекурсии):

// newCurrent = 'ba' + 'c' = 'bac'
// newRemaining = '' (удалили символ 'c' из 'c')
// Рекурсивный вызов: generatePermutations('bac', '')
// Возврат из седьмой итерации рекурсии:

// Теперь седьмая итерация завершилась, и результат 'bac' добавляется в result.
// Возврат из шестой итерации рекурсии:

// Теперь результат 'bac' добавляется в result.
// Восьмая итерация (i = 1 в рекурсии):

// newCurrent = 'b' + 'c' = 'bc'
// newRemaining = 'a' (удалили символ 'c' из 'ac')
// Рекурсивный вызов: generatePermutations('bc', 'a')
// Девятая итерация (i = 0 в рекурсии):

// newCurrent = 'bc' + 'a' = 'bca'
// newRemaining = '' (удалили символ 'a' из 'a')
// Рекурсивный вызов: generatePermutations('bca', '')
// Возврат из девятой итерации рекурсии:

// Теперь девятая итерация завершилась, и результат 'bca' добавляется в result.
// Возврат из восьмой итерации рекурсии:

// Теперь результат 'bca' добавляется в result.
// Десятая итерация (i = 2 в основной функции):

// newCurrent = '' + 'c' = 'c'
// newRemaining = 'ab' (удалили символ 'c' из 'abc')
// Рекурсивный вызов: generatePermutations('c', 'ab')
// Остальные итерации в основной функции:

// Процесс повторяется для оставшихся символов, генерируя все возможные перестановки.
// Возврат результата:

// Функция завершается, и результат, содержащий все уникальные перестановки ('abc', 'acb', 'bac', 'bca', 'cab', 'cba'), возвращается.

// -------------------------------------

// function reduce(fraction) {
//     const [a, b] = fraction;
//     if(b === 0) return;
//     function findN(a, b){
//         return b === 0 ? a : findN(b, a % b)
//     }
//     const n = findN(a, b)
//     const n1 = a / n;
//     const n2 = b / n;
//     if(n1 / n2 === 1) return 1
//     return [n1, n2]
// }

// console.log(reduce([16, 24]))

// function sum1(num) {
//     if(num === 0){
//         return 0
//     } else {
//         return num + sum1(num-1)
//     }
// }

// console.log(sum1(10))

// ----------------------

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// recursion
// function sumTo(n){
//     if(n === 1) return n
//     return n + sumTo(n-1)
// }

// console.log(sumTo(4)) // 4+3+2+1 = 10

// for

// function sumTo(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum
// }

// console.log(sumTo(4)) // 4+3+2+1 = 10

// --------------------

// function removeSmallest(numbers) {
//     let min = Math.min(...numbers);
//     let i = numbers.findIndex(el => el === min)
//     if (i === -1) return []
//     return numbers.filter((el, index) => {
//         return index != i
//     })
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]))

// -------------------------
// function multiply(n, l) {
//     let newArr = [...l].map((el)=>
//         el = Math.round(el/(1/n))
//     )
//     return newArr
//     }

//     console.log(multiply(-239.00000000000003, [1, 2, 3]))

// ----------------------

// function sumStrings(a, b) {
//         if(isNaN(a) || a === ''){
//             return b
//         } else if(isNaN(b) || b === ''){
//             return a;
//         } else {
//             const result = BigInt(a) + BigInt(b);
//             return result.toString();
//         }


// }

// console.log(sumStrings('', '5')) // => '5'

// ----------------------

// function whatCentury(year) {
//     let num = Math.floor(parseInt(year, 10) / 100);
//     let suffix = "";

//     if (num >= 11 && num <= 13) {
//         suffix = "th";
//     } else {
//         switch (num % 10) {
//             case 1:
//                 suffix = "st";
//                 break;
//             case 2:
//                 suffix = "nd";
//                 break;
//             case 3:
//                 suffix = "rd";
//                 break;
//             default:
//                 suffix = "th";
//         }
//     }

//     return `${num}${suffix}`;
// }

// console.log(whatCentury("2000"))

// -----------------------------------

// function squareDigits(num) {
//     let strNum = String(num).split('');
//     strNum.map((item)=>Number(item) ** 2)
//     return +strNum.map((item)=>Number(item) ** 2).join('')
// }

// console.log(squareDigits(9119))

// ---------------------------------

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(i * x)
//     }
//     return z;
// }

// console.log(countBy(2, 5))

// ------------------------------

// function removeAllTheMarkedElementsofaList(arr, removeElementsArr){
//     for(let i = 0; i < removeElementsArr.length; i++){
//         arr = arr.filter(item => item !== removeElementsArr[i])
//     }
//     return arr
// }

// console.log(removeAllTheMarkedElementsofaList([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2]))

// -------------------------
