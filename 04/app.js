const inputBox = document.querySelector('#input-text');
const output = document.querySelector('#output');

const h1Btn = document.querySelector('#h1');
const h2Btn = document.querySelector('#h2');
const h3Btn = document.querySelector('#h3');

// 

inputBox.addEventListener('input', () => {
    output.innerText = inputBox.value;
})

h1Btn.addEventListener('click', () => {
    output.innerHTML = `<h1>${inputBox.value}</h1>`
});

h2Btn.addEventListener('click', () => {
    output.innerHTML = `<h2>${inputBox.value}</h2>`
});

h3Btn.addEventListener('click', () => {
    output.innerHTML = `<h3>${inputBox.value}</h3>`
});