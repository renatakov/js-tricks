// const inputFirstName = document.querySelector('.inputFirstName');
// const inputLastName = document.querySelector('.inputLastName');
// const btnSubmit = document.querySelector('.btnSubmit');
// const h1 = document.querySelector('h1');

// btnSubmit.addEventListener('click', () => {
//   localStorage.setItem('firstName', inputFirstName.value);
//   localStorage.setItem('lastName', inputLastName.value);
// })
// h1.innerText = `
// Hello ${localStorage.getItem('firstName')}
// ${localStorage.getItem('lastName')}
// `;

// console.table(localStorage);

// // API
// const div = document.querySelector('div');.

// fetch('https://newsdata.io/api/1/news?apikey=pub_181525573a2385a4c3925ecabbc34111be4a4')
// .then(res => res.json())
// .then(data=>{
// console.log(data.results)
//   for(let i = 0; i < data.results.length; i++){
//     div.innerHTML += `
//     <span>${data.results[i].category}</span>
//       <h1>${data.results[i].title}</h1>
//       <p>${data.results[i].content}</p>
//     `
//   }
// }

//   )
//   .catch(err => console.log(err));

// // keyevents

// // const div = document.querySelector('div');
// // const btn  = document.querySelector('button');
// // let position = 0;

// // btn.addEventListener('keypress', (e) => {
// // if(e.key == 'd'){
// //   position+=50
// //   div.style.left = position + 'px';
// // }
// // if(e.key == 'a'){
// //   position+=-50
// //   div.style.left = position + 'px';
// // }
// // if(e.key == 'w'){
// //   position+=-50
// //   div.style.top = position + 'px';
// // }
// // if(e.key == 's'){
// //   position+=50
// //   div.style.top = position + 'px';
// // }


// // })

// // axios
// const inputSearch = document.querySelector('#inputSearch');
// let body = document.querySelector('body');
// let h1 = document.querySelector('h1');
// let p = document.querySelector('p');
// let users = []
// inputSearch.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     users.forEach(user => {
//         if(user.name.toLowerCase().includes(e.target.value.toLowerCase())){
//             h1.innerText = `${user.name}`;
//             p.innerText = `${user.email}`;
//         }
//     })
// })

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     console.log(res.data);
//     users = res.data;

// })

// const numbers = [11, 2, 55, 3]

//     numbers.sort((a, b) =>{
//     return b - a; // 55, 11, 3, 2

// })

// console.log(numbers);

// numbers.reduce((acc, currentValue) => {
//     return acc + currentValue;
// })

// console.log(numbers.reduce((acc, currentValue) => {
//     return acc + currentValue; // 71
// }))

// numbers.splice(0, 2, 33, 22)
// console.log(numbers); // 33, 22, 3, 2

// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2); // [33, 22]
// const numbers3 = [1, 2, 13, 4];

// console.log(numbers3.filter((a)=> a>3)) // 13, 4

// const numbers4 = [1, 2, 13, 4];

// console.log(numbers4.fill(10))// 10, 10, 10, 10

// const users = [
//     {
//         id: 1,
//         name: 'John',
//         email: 'kenaa@example.com'
//     },
//     {
//         id: 2,
//         name: 'Jane',
//         email: 'kenaa@example.com'
//     },
//     {
//         id: 3,
//         name: 'Mike',
//         email: 'kenaa@example.com'
//     }
// ]


// console.log(users.filter((user) => { return user.name.toLocaleLowerCase().includes('j')}))
// console.log(users.filter((user) => { return user.id >= 2}))
// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     console.log(res.data);
//     users = res.data;

// })

// login
// const inputEmail = document.querySelector('.inputEmail')
// const inputPassword = document.querySelector('.inputPassword')
// const loginBtn = document.querySelector('.loginBtn')

// const accounts = [
//     {
//         id: 1,
//         name: "Bob",
//         email: "bob228@gmail.com",
//         password: "qwerty321"
//     },
//     {
//         id: 2,
//         name: "Jake",
//         email: "jake123@gmail.com",
//         password: "1234!"
//     }
// ]

// let inputEmailValue, inputPasswordValue;

// inputEmail.addEventListener("input", (e) => {
//     inputEmailValue = e.target.value
// })

// inputPassword.addEventListener("input", (e) => {
//     inputPasswordValue = e.target.value
// })

// loginBtn.addEventListener("click", () => {
//     const filteredAccounts = accounts.filter((acc)=>{
//         if(inputEmailValue == acc.email && inputPasswordValue == acc.password){
//             console.log("loggined")
//             // console.table()
//             sessionStorage.setItem("userEmail", acc.email)
//             sessionStorage.setItem("userPassword", acc.password)
//         }
//     })
// })

// sort()

// const arr = [
//     {
//         name: "Renata",
//         age: 21,
//         email: "renatakov1010@gmail.com",
//         country: "Ukraine"
//     },
//     {
//         name: "John",
//         age: 25,
//         email: "john123@mail.us",
//         country: "USA"
//     },
//     {
//         name: "Anna",
//         age: 29,
//         email: "annahecker@mail.de",
//         country: "Germany"
//     }
// ]

// arr.sort((a,b)=>{
//     if(a.country.toLowerCase() < b.country.toLowerCase()){
//         return -1
//     } else {
//         return 1
//     }
// })

// console.table(arr)

// ----------------------
// let arr = [];

// function splitNumberIntoGroups(num) {
//     if (num === 0) return arr;
//     arr.unshift(`${num % 1000}`);
//     return splitNumberIntoGroups(Math.floor(num / 1000));
// }

// console.log(splitNumberIntoGroups(10110116).join());

// -------------------------------

// function lastDigit(arr){
//     let result = arr.reduceRight((previousValue, currentValue)=>{
//         return currentValue ** previousValue
//     }, 1)
//     return result % 10;
// }

// let arr1 = [3, 4, 2];


// console.log(lastDigit(arr1));

// --------------------------------------



// function solution(str) {
//     let arr = []
//     arr = str.replace(/.{2}/g, '$& ').split(' ')
//     return arr.map(item => {
//         if (item.length !== 2) {
//             item = item + '_'
//         }
//         return item
//     }).filter(item => {
//         if (item !== '' && item !== '_') return true
//     })

// }

// console.log(solution('abcdef'));

// ----------------------------------------
// function incrementString(strng) {
//     if (strng.search(/\d+$/) === -1) {
//         return strng + '1';
//     } else if (strng.match(/\d+$/)[0].startsWith('0')) {
//         let lastDigit = (+strng.match(/[0-9]+$/) + 1).toString().padStart(strng.match(/[0-9]+$/)[0].length, '0');
//         let newStr = strng.slice(0, strng.indexOf(strng.match(/[0-9]+$/)[0])) + lastDigit;
//         return newStr;
//     } else if(strng.match(/\d+$/)[0] !== '0'){
//         let lastDigit = +strng.match(/\d+$/)[0] + 1;
//         let newStr = strng.replace(/\d+$/, lastDigit);
//         return newStr;
//     }
// }


// console.log(incrementString('fooobar099'));

// ---------------------------------
// let nums = {
//     'zero': 0,
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9,
//     'ten': 10,
//     'eleven': 11,
//     'twelve': 12,
//     'thirteen': 13,
//     'fourteen': 14,
//     'fifteen': 15,
//     'sixteen': 16,
//     'seventeen': 17,
//     'eighteen': 18,
//     'nineteen': 19,
//     'twenty': 20,
//     'thirty': 30,
//     'forty': 40,
//     'fifty': 50,
//     'sixty': 60,
//     'seventy': 70,
//     'eighty': 80,
//     'ninety': 90,
//     'hundred': 100,
//     'thousand': 1000,
//     'million': 1000000

// }

// function parseIntF(string) {
//     let arr = string.replace(/[-]/g, ' ').split(' ');
//     console.log(arr);
//     let newArr = arr.map((item)=>{
//         for (let num in nums) {
//             if (num === item) {
//                 return nums[num]
//             }
//         }
//     })
//     return newArr
// }

// console.log(parseIntF('two hundred forty-six'));

// ----------------------------------


const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
    + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
    + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
    + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
    + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
    + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
    + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
    + "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
    + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
    + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
    + "<P Salinge> Main Street, +1-098-512-2222, Denve\n"
// let names = dr.match(/(?<=<).+(?=>)/gm);
// console.log(names);

// let numbers = dr.match(/\d{1,3}-\d{3}-\d{3}-\d{4}/gm)
// let drArr = dr.split('\n')
// console.log(numbers);
// console.log(drArr);
// let newArr = drArr.map((item) => {
//     for (let i = 0; i < names.length; i++) {
//         item = item.replace(names[i], '').replace(numbers[i], '').replace(/[<>/;?:*!+$']/, '').replace(/_/, ' ').trimEnd().trimStart()

//     }
//     return item
// })

// function phone(pb, num) {
//     let n = pb.match(/(?<=<).+(?=>)/gm);
//     let tels = pb.match(/\d{1,3}-\d{3}-\d{3}-\d{4}/gm);
//     let pbArr = pb.split('\n');
//     const found = pbArr.find((item) => item.includes(num));
//     let f = tels.filter(item => item === num);
//     if (f.length > 1) return `Error => Too many people: ${num}`

//     if (found === undefined) return `Error => Not found: ${num}`
//     let adresses = pbArr.map((item) => {
//         for (let i = 0; i < n.length; i++) {
//             item = item.replace(n[i], '').replace(tels[i], '')

//                 .split(' ').filter((item) => item !== '').join(' ')
//                 .replace(/[<>/?:,;*!+$]/g, '').replace(/_/g, ' ');
//         }
//         return item;
//     });
//     for (let i = 0; i < pbArr.length; i++) {

//         if (pbArr[i].includes(num)) {
//             return `Phone => ${num}, Name => ${n[i]}, Address => ${adresses[i]}`
//         }

//     }
//     }
// console.log(phone(dr, '1-908-512-2222'))
// // console.log(drArr[0].includes(numbers[0]));
// // console.log(newArr);

// --------------------------

// memoization
// const prevValues = []
// function m(n) {
//     let result = n ** 2;
//     if (prevValues[n] != null) {
//         return prevValues[n];
//     }
//     prevValues[n] = result
//     return result
// }



//  ---------------


// function topThreeWords(text) {
//     let arr = text.replace(/[#!@*/=+:%$,^&_\.\\-]+/g, ' ').toLowerCase().split(' ');
//     if(text.search(/[A-Za-z]+/g) === -1) return [];
//     let s = arr.reduce((acc, cur) => {
//         if (cur !== '') {

//             acc[cur] = arr.filter(item => item === cur).length
//         }
//         return acc
//     }, {})
//     let a1 = Object.entries(s).sort((a, b) => {
//         return b[1] - a[1]
//     })
//     if (a1.length === 0) return [];

//     if (a1.length === 1) return [a1[0][0]];

//     if (a1.length === 2) return [a1[0][0], a1[1][0]];
//     let a2 = [a1[0][0], a1[1][0], a1[2][0]]
//     return a2

// }

// console.log(topThreeWords("  '  "));

// function getIndexToIns(arr, num) {
//     arr.push(num)
//     let newArr = arr.sort((a, b) => a - b)
//     console.log(newArr);
//     return newArr.findIndex(item => item === num);
// }

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

// function mutation(arr) {
//     let s = arr[0].split('').map(item => item.toLowerCase());
//     let s2 = arr[1].split('').map(item => item.toLowerCase());
//     for (let i = 0; i < s2.length; i++) {
//         if(s.indexOf(s2[i]) === -1) return false
//     }
//     return true
// }

// console.log(mutation(["hello", "hey"]))


// function chunkArrayInGroups(arr, size) {
//     let newArr = []
//     while(arr.length > 0){
//         newArr.push(arr.splice(0, size))
//     }
//     return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// -------------------------------

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// function score(dice) {
//     let s = 0;
//     let obj = {};
//     dice.forEach(el => {
//         obj[el] = dice.filter(i => i === el).length;
//     });
//     console.log(obj);
//     for (const key in obj) {
//         if (key == 1) {
//             if (obj[key] >= 3 && obj[key] % 3 !== 0) {
//                 s += 1000 * (Math.floor(obj[key] / 3)) + ((obj[key] % 3) * 100);
//             } else if (obj[key] % 3 === 0) {
//                 s += 1000 * (obj[key] / 3);
//             } else {
//                 s += 100 * obj[key];
//             }
//         } else if (key == 5) {
//             if (obj[key] > 3 && obj[key] % 3 !== 0) {
//                 s += 500 * (Math.floor(obj[key] / 3)) + ((obj[key] % 3) * 50);
//             } else if (obj[key] % 3 === 0) {
//                 s += 500 * (obj[key] / 3);
//             }
//             else {
//                 s += 50 * obj[key];
//             }
//         } else if (obj[key] % 3 === 0 && key != 5 && key != 1) {
//             s += +key * 100;
//         } else if(obj[key] >= 3 && obj[key] % 3 !== 0 && key != 5 && key != 1){
//             s += +key * 100 * (Math.floor(obj[key] / 3))
//         }
//     }
//     return s;
// }

// console.log(score([2, 2, 2, 2, 2]));


// --------------------------------------------------

// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
    //code me
    // const newArr = nums.map((item, i) => nums.slice(i).filter(num => num < item).length)
    // console.log(newArr);
    
    // for (let i = 0; i < nums.length; i++) {
    //     const [first, ...rest] = nums.slice(i)
    //     const count = rest.filter(num => num < first).length
    //     newArr.push(count)
        
    // }
    // return newArr
}

console.log(smaller([1, 2, 0]))