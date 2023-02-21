let cart = JSON.parse(localStorage.getItem("cart"));

cart.forEach(element => {
    let count = 1;
    let amount = document.querySelector("#total");
    amount.innerText = "₹" + eval(count * element.price);
});

document.querySelector("#request").addEventListener("click", request);

function request() {
    let upi = document.querySelector("#upi").value;

    flag = "Please Enter Valid UPI ID";
    for (let i = 0; i < upi.length; i++) {
        if (upi[i] == "@") {
            flag = "Order Successful";
        }
    }
    if (flag == "Please Enter Valid UPI ID"){
        alert(flag);
    }
    else{
        setTimeout(() => {
            alert(flag);
        }, 3000);
    }
}