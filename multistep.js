const btnMultiStep = document.querySelector('#nextBtn'),
        multiStepLi = document.querySelectorAll('.multistep > li');
        // console.log(multiStepLi);

let index = -1;

btnMultiStep.addEventListener('click', ()=>{
    index++;
    if (index === 4) {
        index = 0;
    }
    for (let i = 0; i < multiStepLi.length; i++) {
        multiStepLi[i].classList.remove('clicked');
    }
    multiStepLi[index].classList.add('clicked')
})