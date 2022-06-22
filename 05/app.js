const inputBox = document.querySelector('#input-text');
const output = document.querySelector('#output');

const redBtn = document.querySelector('#red');
const greenBtn = document.querySelector('#green');
const blueBtn = document.querySelector('#blue');

//

inputBox.addEventListener('input', () => {
    output.innerText = inputBox.value;
});

redBtn.addEventListener('click', () => {
    output.style.color = 'red';
});

greenBtn.addEventListener('click', () => {
    output.style.color = 'green';
});

blueBtn.addEventListener('click', () => {
    output.style.color = 'blue';
});