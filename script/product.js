let addCart = document.querySelector(".addToCart").addEventListener("click",addToCart);

let arr = [];

function addToCart(){
//     let img = document.getElementsByClassName("")
    let title = document.querySelector("h2").innerText;
    let price = document.querySelector("#price").innerText;
    let obj = {
        title,
        price
    };

    arr.push(obj);

    localStorage.setItem("cart",JSON.stringify(arr));
}