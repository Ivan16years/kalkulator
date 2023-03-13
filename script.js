let calc = document.querySelector('#calc');
let display = document.querySelector('#display');
let keys = document.querySelectorAll('.key');
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');


let exp = '';

display.style.textAlign = 'right'

for (let key of keys) {
    key.addEventListener('click', (evt) => {
        exp = exp + key.textContent;
        display.value = exp;
    })
}

reset.addEventListener('click', (evt) => {
    display.value = '0'
    exp = '';
})

result.addEventListener('click', (evt) => {
    exp = eval(display.value);
    display.value = exp;
    exp = '';
})