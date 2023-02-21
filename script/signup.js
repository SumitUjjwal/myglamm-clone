
let signin = document.querySelector("#submit").addEventListener("click", getData);

let arr = JSON.parse(localStorage.getItem("signup")) || [];

function getData() {
    let next = document.querySelector("#submit");

    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let add1 = document.querySelector("#add1").value;
    let add2 = document.querySelector("#add2").value;
    let pin = document.querySelector("#pincode").value;
    let state = document.querySelector("#state").value;

    let obj = {
        name, phone, email, add1, add2, pin, state
    };

    

    if (name == "" || phone == "" || email == "" || add1 == "" || pincode == "" || state == "" || phone.length < 10) {
        alert("Enter Correct Details")
    }
    else if (phone.length == 10) {
        let flag = true;
        arr.forEach(element => {
            if (phone == element.phone) {
                flag = false;
            }
        });
        if (flag == false) {
            alert("User Already Registered")
            next.setAttribute("href", "signin.html")
        }
        else {
            arr.push(obj);
            next.setAttribute("href", "verify-signup.html");
            localStorage.setItem("signup", JSON.stringify(arr));
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

