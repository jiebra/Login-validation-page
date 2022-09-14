var form =document.getElementById("form")
var userName =document.getElementById("username")
var email =document.getElementById("email")
var password =document.getElementById("password")
var password2 =document.getElementById("password2")

form.addEventListener("submit", checkInputs);

function checkInputs(e){
    e.preventDefault();
    var usernameValue =userName.value.trim() //trim method remove white space from a string
    var emailValue= email.value.trim() 
    var passwordValue =password.value.trim() 
    var password2Value = password2.value.trim()

    if (usernameValue===''){
        //show error
        //add error class
        //create error function
        setErorFor(userName, 'Username cannot be blank')
    }else{
        //add success class
        setsucesfor(userName)
    }
    //for email
    let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue ===''){
    
        setErorFor(email, 'Email cannot be blank')
    } else if (!emailValue.match(regex)){
        setErorFor(email, 'Invalid email')
    }else{
        setsucesfor(email)
    }
    //if statement for password check...............................................................//
    //let paswordChec =/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    if(passwordValue ===''){
        setErorFor(password, 'Password cannot be blank')
    
    }else{
        setsucesfor(password)
    }
    //if statement for password 2 check
    if(password2Value ===''){
        setErorFor(password2, 'Password Check cannot be blank')
    
    }else if(passwordValue !== password2Value ){
        setErorFor(password2, 'Password does not match')
    }else{
        setsucesfor(password2)
    }
}
//...............................................................................................//
function setErorFor(input, message){
    var formControl = input.parentElement; //to target form control div
    var small =formControl.querySelector('small')
    small.innerText = message;
    //add error class
    formControl.className = 'fom-control error';

}
function setsucesfor(input){
    var formControl = input.parentElement;
    formControl.className ='fom-control succes';
}

//function for email.cla
