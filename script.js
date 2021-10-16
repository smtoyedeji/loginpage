const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');


signUpBtn.addEventListener('click', function() {
    container.classList.add('right-panel-active')
});

signInBtn.addEventListener('click', function() {
    container.classList.remove('right-panel-active')
});