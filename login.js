// 1st form catch 
let signup = document.querySelector("#signUp");
// 2nd form catch 
let signin = document.querySelector("#signIn");

let signupBtn=document.querySelector("#signUpPage")
signupBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log("btn work")
    signin.style.display="none";
    signup.style.display="block";
});

// signup form functionality 
signup.addEventListener("submit",function (event){
    event.preventDefault();
    let username= signup.name.value;
    let user=signup.email.value;
    let password=signup.password.value;
    let passwordchk=signup.passwordChk.value;
    
    if(password!=passwordchk){
        alert("Password do not match!")
    }
    else{
        localStorage.setItem("user",user);
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        // alert("Sign Up Successful!");
        // reset input field
        signup.reset();
        signin.style.display="block";
        signup.style.display="none";
    }
}); 
// signIn form functionality
signin.addEventListener("submit",(event)=>{
    event.preventDefault();
    let user=signin.email1.value;
    console.log(user);
    let password=signin.password1.value;
    console.log(password);
    let storedUser=localStorage.getItem("user");

    let storedPassword=localStorage.getItem("password");

    if(user != storedUser){
        alert("User not registered! Please Ragister");
        signin.style.display="none";
        signup.style.display="block";
    }
    else{
        if(password != storedPassword){
            alert("Wrong Password");
        }
        else{
            alert("login Successfull");
            // go to the index page 
            window.location.assign("index.html");
        }
    }
});