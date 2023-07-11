const valid_Email = document.getElementById('valid');
const input_Email = document.getElementById('email-input');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const success_Email = document.getElementById('success')
const subscribe_Email = document.getElementById('subscribe')
const email_Sub = document.getElementById('success-email')

function validate_email(){
        if(!re.test(input_Email.value)){
            console.log('invalid Email');
            valid_Email.classList.add('active');
            return false;
        } else {
            console.log('valid email');
            valid_Email.classList.remove('active');
            email_Sub.innerHTML = `<strong>${input_Email.value}</strong>`;
            console.log(email_Sub.innerHTML)
            return true;
        }
}

function successEmail(event){    
    event.preventDefault()
    if(validate_email()){
        subscribe_Email.classList += ' display-none'
        success_Email.classList -= ' display-none'        
    } else {
        success_Email.classList += ' display-none'
    }
}

