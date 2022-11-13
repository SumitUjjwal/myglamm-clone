
let signin = document.querySelector("#submit").addEventListener("click", getData);

let arr = JSON.parse(localStorage.getItem("signup")) || [];

function getData() {

    let next = document.querySelector("#submit");
    let phone = document.querySelector("#phone").value;

    let obj = {
        phone
    };


    if (phone == "" || phone.length < 10) {
        alert("Enter Correct Phone Number")
    }
    else if (phone.length == 10) {
        let flag = true;
        arr.forEach(element => {
            if (phone == element.phone) {
                flag = false;
            }
        });
        if (flag == true) {
            alert("User is not Registered")
            next.setAttribute("href", "signup.html");
        }
        else {
            arr.push(obj);
            next.setAttribute("href", "verify.html");
        }
    }
}










































// let signin = document.querySelector("form>:nth-child(4)");



// function data() {
//     let arr = JSON.parse(localStorage.getItem("signin")) || [];
//     signin.setAttribute("id", "submit");
//     signin.addEventListener("click", LSData);


//     function LSData() {
//         let button = document.querySelector("form>:nth-child(4)");
//         let enterOTP = document.querySelector("#otp");
//         let phone = document.querySelector("#phone").value;

//         let otp = Math.floor(1000 + Math.random() * 9000);
//         let obj = {
//             phone,
//             otp
//         };
//         arr.push(obj);
//         if (phone == '' || phone.length < 10) {
//             alert("Enter Correct Phone Number");
//         }
//         else {
//             enterOTP.style.display = "block";
//             button.innerText = "VERIFY";
//             setTimeout(() => {
//                 alert("Your OTP to Sign In on BU is : " + otp)
//             }, 1000);

//             // button.setAttribute("href","details.html");
//             signin.setAttribute("id", "verify");
//             // console.log("id=verify")

//             // document.querySelector("#verify").addEventListener("Click", verifyData);





//             // function verifyData() {
//             //     // let enteredOTP = document.querySelector("#inputOTP").value;
//             //     // console.log(enteredOTP)
//             //     // if (enteredOTP == otp) {
//             //     //     button.setAttribute("href", "details.html");
//             //     // }
//             //     // else {
//             //     //     alert("Please Enter correct OTP")
//             //     // }
//             // }
//             // console.log("verified")

//             localStorage.setItem("signin", JSON.stringify(arr));
//         }

//     }

//     signin.addEventListener("Click", verifyData);

//     function verifyData() {
//         let enteredOTP = document.querySelector("#inputOTP").value;

//         console.log(enteredOTP)
//     }


// }

// data();

