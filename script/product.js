let addCart = document.querySelector(".addToCart").addEventListener("click",addToCart);

let arr = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(){
//     let img = document.getElementsByClassName("")
    let title = document.querySelector("h2").innerText;
    let price = document.querySelector("#price").innerText;
    let img = document.querySelector("#productImg").src;
    let obj = {
        title,
        price,
        img
    };

    arr.push(obj);

    localStorage.setItem("cart",JSON.stringify(arr));
}

let inOut = document.querySelector("#user").addEventListener("click", signout);
let next = document.querySelector("#user");
function signout() {
    
    if ((localStorage.getItem("signup")) == null) {
        next.setAttribute("href", "signin.html");
    }
    else {
        alert("Signed Out Successfully");
        localStorage.clear();
    }
}