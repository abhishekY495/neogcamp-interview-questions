let serverUrl = 'https://api.agify.io/';

const inputBox = document.querySelector('#input-num');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

// 

submitBtn.disabled = true;

inputBox.addEventListener('input', () => {
    if (inputBox.value) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

function getUrl() {
    return serverUrl + '?name=' + inputBox.value;
};

submitBtn.addEventListener('click', getAge);
function getAge() {
    fetch(getUrl())
        .then(res => res.json())
        .then(data => {
            output.innerText = `Hello ${data.name.toUpperCase()}, your age is ${data.age}.`;
        })
        .catch(error => output.innerText = error);
};