let serverUrl = 'https://api.agify.io/';

const apiCallBtn = document.querySelector('#api-call-btn');
const output = document.querySelector('#output');

// 

apiCallBtn.addEventListener('click', callApi);
function callApi() {
    fetch(serverUrl)
        .then(res => res.json())
        .then(data => output.innerText = data.error)
        .catch(error => output.innerText = error)
}