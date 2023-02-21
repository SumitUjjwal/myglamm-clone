

let url = "https://6369e068c07d8f936d8d6464.mockapi.io/makeUp";
let output = [];

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        output = data.data;
        displayCard(data)
    });


// search functionality

let searchTerm;
function search() {
    searchTerm = document.getElementById("searchTerm").value;
    searchProduct(searchTerm);
}

function searchProduct(term) {
    fetch(url + "?search=" + term)
        .then((res) => res.json())
        .then((data) => {
            displayCard(data)
        })
        .catch((err) => displayErr())
}

function displayCard(data) {
    document.querySelector("#product-container").innerHTML = null;
    data.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("id", "card");

        let img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("width", "100%");

        let title = document.createElement("h2");
        title.innerText = element.title;

        let price = document.createElement("h3");
        price.innerText = element.price;

        let details = document.createElement("p");
        details.innerText = element.desc;

        div.append(img, title, details, price);
        document.querySelector("#product-container").append(div);
    });
}

function displayErr() {
    document.querySelector("#product-container").innerHTML = null;
    let div = document.createElement("div");
    div.innerText = "404"
    div.style.fontSize = "100px"

    document.querySelector("#body").append(div)
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