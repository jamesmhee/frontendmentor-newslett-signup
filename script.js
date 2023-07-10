const valid_email = document.getElementById('valid');
const input_email = document.getElementById('email-input');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate_email(){
        if(!re.test(input_email.value)){
            console.log('invalid email');
            valid_email.classList.add('active');
            return false;
        } else {
            console.log('valid email');
            valid_email.classList.remove('active');
            return true;
        }
    }
