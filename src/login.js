export default function login(){
    let loginBtn = document.getElementById('loginBtn');
    let userNameInput = document.getElementById('userNameInput');
    let passwordInput = document.getElementById('passwordInput');
    let loginScreenBackground = document.getElementById('loginScreenBackground')
    loginBtn.addEventListener('click', loginEventListener);
    
    function loginEventListener(){
        let userNameValue = userNameInput.value;
        let userNameLowercase = userNameValue.toLowerCase();
        let passwordValue = passwordInput.value;
        let passwordLowercase = passwordValue.toLowerCase();
    
        if(userNameLowercase == 'coachclark@ucf.edu' && passwordLowercase == 'graydog'){
            loginScreenBackground.style.display = 'none';
        }
        else{
            userNameInput.value = '';
            passwordInput.value = '';
        }
    }
}