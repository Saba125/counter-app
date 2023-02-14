let ParagraphEl = document.querySelector('.p-el')
let DecreaseEl = document.querySelector('.Decrease-el')
let Resetel = document.querySelector('.Reset-el')
let IncreaseEl = document.querySelector('.Increase-el')
let clicks = 1;
let Minusclicks = 0
let Reset = 0

IncreaseEl.addEventListener('click', function(){
    ParagraphEl.textContent = clicks++
    if (clicks > 0){ 
   ParagraphEl.style.color = "#83ff08"
    }
    else if (clicks < 0) {
        ParagraphEl.style.color = "#d21404"
        
    }
})
DecreaseEl.addEventListener('click', function(){
ParagraphEl.textContent = clicks--
if (clicks < 0){
    ParagraphEl.style.color = "#d21404"
     }
     
})
Resetel.addEventListener('click', function(){
    ParagraphEl.textContent = 0;
    clicks = 0
})