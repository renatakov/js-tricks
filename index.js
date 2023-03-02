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
const h1 = document.querySelector('h1');

fetch('http://api.weatherapi.com/v1/current.json?key=f57ded1f279f4aeaa14102446232101&q=Krakov&aqi=no')
.then(res => res.json())
.then(data=>
  h1.innerText = `${data.current.temp_c}°C in ${data.location.name}`
  )
  .catch(err => console.log(err));