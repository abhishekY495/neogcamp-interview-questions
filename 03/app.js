const inputBox = document.querySelector('#text-input');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const output = document.querySelector('#output');

// 

let fontSize = 16;

inputBox.addEventListener('input', () => {
    output.innerText = inputBox.value;
});

incrementBtn.addEventListener('click', () => {
    fontSize+=2;
    output.style.fontSize = fontSize+'px';
});

decrementBtn.addEventListener('click', () => {
    fontSize-=2;
    output.style.fontSize = fontSize+'px';
});