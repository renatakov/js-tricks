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

// API
// const div = document.querySelector('div');

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

// keyevents

// const div = document.querySelector('div');
// const btn  = document.querySelector('button');
// let position = 0;

// btn.addEventListener('keypress', (e) => {
// if(e.key == 'd'){
//   position+=50
//   div.style.left = position + 'px';
// }
// if(e.key == 'a'){
//   position+=-50
//   div.style.left = position + 'px';
// }
// if(e.key == 'w'){
//   position+=-50
//   div.style.top = position + 'px';
// }
// if(e.key == 's'){
//   position+=50
//   div.style.top = position + 'px';
// }


// })

// axios
const inputSearch = document.querySelector('#inputSearch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let users = []
inputSearch.addEventListener('input', (e) => {
    console.log(e.target.value);
    users.forEach(user => {
        if(user.name.toLowerCase().includes(e.target.value.toLowerCase())){
            h1.innerText = `${user.name}`;
            p.innerText = `${user.email}`;
        }
    })
})

axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    console.log(res.data);
    users = res.data;
    
})