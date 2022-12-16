// this is 2nd form
let signup= document.querySelector("#signUp");
let signin= document.querySelector("#signIn");
// console.log("Working");
let signupbtn = document.querySelector("#signUpbtn");

signupbtn.addEventListener("click", function(event){
    event.preventDefault();
    
    // console.log("Sign Up working");
    signup.style.display = "block";
    signin.style.display = "none";
});

let signinbtn = document.querySelector("#signIn1");

signinbtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Sign In working")
});

// this is first form 
let signup1btn = document.querySelector("#signUp1");
signup1btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Sign Up form is working")
});
