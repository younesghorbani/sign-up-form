function validatePassword(event) {
    if (event.target.type === 'password') {
        if (message.textContent !== '') {
            password.removeAttribute('class');
            confirmPassword.removeAttribute('class');
            message.textContent = '';
        }
    }
}

function submitForm() {
    if ((password.value !== confirmPassword.value) || 
        (password.value === '' || confirmPassword.value === '')) {
            password.setAttribute('class', 'error');
            confirmPassword.setAttribute('class', 'error');
            message.style.color = '#dc3545';
            message.textContent = '* Passwords do not match';
    }
}

let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let message = document.querySelector('.message');
let createAccountBtn = document.querySelector('button');

window.addEventListener('input', validatePassword);
createAccountBtn.addEventListener('click', submitForm);