const passwordInputBox = document.querySelector('#password-box');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

// 

submitBtn.disabled = true;

submitBtn.addEventListener('click', greaterThan10);
passwordInputBox.addEventListener('input', enableSubmitBtn);

function greaterThan10() {
    if (passwordInputBox.value.length > 10) {
        output.innerText = 'Password created';
    } else {
        output.innerText = 'Password should be greater than 10 characters.';
    }
}

function enableSubmitBtn() {
    if (passwordInputBox.value.length > 10) {
        submitBtn.disabled = false;
        passwordInputBox.style.backgroundColor = '#2bff6b';
    } else {
        submitBtn.disabled = true;
        passwordInputBox.style.backgroundColor = '#fa3939';
    }
}
