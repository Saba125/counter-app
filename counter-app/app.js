const value = document.querySelector('.p-el')
let count = 0;
// Buttons

const Buttons = document.querySelectorAll('.btn')
// Function

Buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let style = e.currentTarget.classList;
        if (style.contains('decrease')){
            count--
        }else if (style.contains('increase')){
            count++
        }else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0){
            value.style.color = '#83ff08'
        }else if (count < 0){
            value.style.color = '#d21404'
        }else {
            value.style.color = 'white  '
        }
    })
})