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
const div = document.querySelector('div');

fetch('https://newsdata.io/api/1/news?apikey=pub_181525573a2385a4c3925ecabbc34111be4a4')
.then(res => res.json())
.then(data=>{
console.log(data.results)
  for(let i = 0; i < data.results.length; i++){
    div.innerHTML += `
    <span>${data.results[i].category}</span>
      <h1>${data.results[i].title}</h1>
      <p>${data.results[i].content}</p>
    `
  }
}

  )
  .catch(err => console.log(err));