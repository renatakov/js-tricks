let inputValue1 = document.getElementById('inputValue1');
let inputValue2 = document.getElementById('inputValue2');
let addBtn = document.getElementById('addBtn');
let substractBtn = document.getElementById('substractBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let clearBtn = document.getElementById('clearBtn');
let resultTxt = document.querySelector('.result');

addBtn.addEventListener('click', () => {
    resultTxt.innerHTML = +inputValue1.value + +inputValue2.value;
    inputValue1.value = '';
    inputValue2.value = '';
    
})

substractBtn.addEventListener('click', () => {
    resultTxt.innerHTML = +inputValue1.value - +inputValue2.value;
    inputValue1.value = '';
    inputValue2.value = '';
})

divideBtn.addEventListener('click', () => {
    resultTxt.innerHTML = +inputValue1.value / +inputValue2.value;
    inputValue1.value = '';
    inputValue2.value = '';
})

multiplyBtn.addEventListener('click', () => {
    resultTxt.innerHTML = +inputValue1.value * +inputValue2.value;
    inputValue1.value = '';
    inputValue2.value = '';
})

clearBtn.addEventListener('click', () => {
    resultTxt.innerHTML = '';
});