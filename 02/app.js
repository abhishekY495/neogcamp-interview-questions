const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const output = document.querySelector('#output');

// 

addBtn.addEventListener('click', () => {
    const result = Number(num1.value) + Number(num2.value);
    output.innerText = result;
});

subtractBtn.addEventListener('click', () => {
    const result = Number(num1.value) - Number(num2.value);
    output.innerText = result;
});

multiplyBtn.addEventListener('click', () => {
    const result = Number(num1.value) * Number(num2.value);
    output.innerText = result;
});

divideBtn.addEventListener('click', () => {
    const result = Number(num1.value) / Number(num2.value);
    output.innerText = result;
});