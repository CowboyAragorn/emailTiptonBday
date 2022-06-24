export default function login(){
    let loginBtn = document.getElementById('loginBtn');
    let userNameInput = document.getElementById('userNameInput');
    let passwordInput = document.getElementById('passwordInput');
    let loginScreenBackground = document.getElementById('loginScreenBackground')
    loginBtn.addEventListener('click', loginEventListener);

    function loginEventListener(){
        if(userNameInput.value == 'Jacobman0313@gmail.com' && passwordInput.value == 'monkey'){
            loginScreenBackground.style.display = 'none';
        }
        else{
            userNameInput.value = '';
            passwordInput.value = '';
        }
    }
}