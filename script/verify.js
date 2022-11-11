
let otp = Math.floor(1000 + Math.random() * 9000);
alert("Your OTP to Sign In on BU is : " + otp);

let verify = document.querySelector("#verify").addEventListener("click",getData);

let arr = JSON.parse(localStorage.getItem("signin")) || [];

function getData(){

    let enteredOTP = document.querySelector("#inputOTP").value;

    if (enteredOTP == otp){
        let next = document.querySelector("#verify");
        next.setAttribute("href", "index.html");
        alert("Signed In Successfully")
    }
    else {
        alert("Enter Correct OTP");
    }
}