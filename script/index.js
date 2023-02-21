let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// search functionality

let url = "https://6369e068c07d8f936d8d6464.mockapi.io/makeUp";

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
        });
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