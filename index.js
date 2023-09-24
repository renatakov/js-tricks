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
