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

let detail = JSON.parse(localStorage.getItem("signup"));

detail.forEach(element => {
    let name = document.querySelector(".name");
    name.innerText = element.name;

    let address = document.querySelector(".add>span");
    address.innerText = element.add1 + element.add2;

    let phone = document.querySelector(".phone>span");
    phone.innerText = element.phone;

    let email = document.querySelector(".email>span");
    email.innerText = element.email;
});

let order = JSON.parse(localStorage.getItem("cart"));

let myBag = document.querySelector(".order");

function displayProducts(data) {
    myBag.innerHTML = null;
    data.forEach(function(element) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.img);
        img.setAttribute("width","100px");

        let title = document.createElement("h3");
        title.innerText = element.title;

        let count = 1;

        let quantity = document.createElement("span");
        quantity.innerText = count;

        let total = document.createElement("h3");
        total.innerText = "₹" + eval(count * element.price);

        div.append(img,title,quantity,total);
        myBag.append(div);
    });
}

displayProducts(order)