const inputFirstName = document.querySelector('.inputFirstName');
const inputLastName = document.querySelector('.inputLastName');
const btnSubmit = document.querySelector('.btnSubmit');
const h1 = document.querySelector('h1');

btnSubmit.addEventListener('click', () => {
  localStorage.setItem('firstName', inputFirstName.value);
  localStorage.setItem('lastName', inputLastName.value);
})
h1.innerText = `
Hello ${localStorage.getItem('firstName')}
${localStorage.getItem('lastName')}
`;

console.table(localStorage);