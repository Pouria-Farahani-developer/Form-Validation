const _form = document.getElementById('form');
const _username = document.getElementById('username');
const _email = document.getElementById('email');
const _password = document.getElementById('password');
const _passwordtwo = document.getElementById('password2');



_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})


function checkInputs(){
    const usernameval = _username.value.trim();
    const emailval = _email.value.trim();
    const passwordval = _password.value.trim();
    const passwordtwoval = _passwordtwo.value.trim();


    if(usernameval === ''){
        seterrorfor(_username,'username cannot be blank')
    }else{
        setsuccesfor(_username)
    }

    if(emailval === ''){
        seterrorfor(_email,'email cannot be blank')
    }else if(!(isemail(emailval))){
        seterrorfor(_email,'email is not valid')
    }else{
        setsuccesfor(_email)
    }



    if(passwordval == ''){
        seterrorfor(_password,'password cannot be blank')
    }else if (!(ispass(passwordval))){
        seterrorfor(_password,'password is not strong')
    }
    else{
        setsuccesfor(_password)         
    }


    

    if(passwordtwoval == ''){
        seterrorfor(_passwordtwo,'password check cannot be blank')
    }else if(passwordval !== passwordtwoval){
        seterrorfor(_passwordtwo,'password doesnot match')
    } else{
        setsuccesfor(_passwordtwo)
    }

}


function seterrorfor(input,message){
    const form_control = input.parentElement;
    const small = form_control.querySelector('small')
    small.innerText = message;
    form_control.className = 'form-control error'
}


function setsuccesfor(input){
    const form_control = input.parentElement;
    form_control.className = 'form-control succes'
}




function isemail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function ispass(pass){
    
    // Minimum eight characters, at least one letter, one number and one special character:

    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pass)

}

