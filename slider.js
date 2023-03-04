let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");
let sliderImg = document.getElementById("photo1");

let arrImg = ["0.jpg", "q93_cc6bcab1cdb51269a0272a6b1ed5b80c0ea170e263e1ff39571d6abfb5863b56.png", "witcher 3 007.jpg"];

let imgNow = 0;
btnPrev.addEventListener("click",()=>{
if(imgNow==0){
imgNow = arrImg.length-1;
} else{
  imgNow--;
}
sliderImg.src = `/${arrImg[imgNow]}`;

})
btnNext.addEventListener("click",()=>{
  if(imgNow==arrImg.length-1){
    imgNow = 0;
  } else{
    imgNow++;
  }
sliderImg.src = `/${arrImg[imgNow]}`;
});