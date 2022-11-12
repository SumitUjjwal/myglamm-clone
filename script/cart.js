// let myBag = document.querySelector("#bag");

// let p = document.createElement("p");
// p.innerText = "MY BAG ";
// p.style.fontSize = "200px"

// myBag.append(p);
// console.log(p.innerText)


let products = JSON.parse(localStorage.getItem("cart"));

let myBag = document.querySelector("#products");
let grand = document.querySelector("#grand span");

function displayProducts(data) {
    myBag.innerHTML = null;
    grand.innerHTML = null;
    data.forEach(function(element,index) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.img);
        img.setAttribute("width","150px");

        let title = document.createElement("h3");
        title.innerText = element.title;

        let price = document.createElement("h3");
        price.innerText = element.price;
        
        let count = 1;

        let inc = document.createElement("span");
        inc.innerText = "+";
        inc.addEventListener("click",function(){
            count++;
            if(count>10){
                alert("Maximum Quantity limit is 10")
            }
            else{
                quantity.innerText =+ count;
                total.innerText = eval(count * element.price);
            }
        })

        let dec = document.createElement("span");
        dec.innerText = "-";
        dec.addEventListener("click",function(){
            count--;
            if(count<1){
                removeProduct(data,index)
            }
            else{
                quantity.innerText =+ count;
                total.innerText = eval(count * element.price);
            }
        })

        let quantity = document.createElement("span");
        quantity.innerText = count;

        let total = document.createElement("h3");
        total.innerText = eval(count * element.price);

        let remove = document.createElement("h3");
        remove.innerText = "X";
        remove.addEventListener("click",function(){
            removeProduct(data,index)
        })

        div.append(img,title,price,dec,quantity,inc,remove);
        grand.append(total)
        myBag.append(div);
    });
}

function removeProduct(data,index){
    data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    displayProducts(products);
}

displayProducts(products)
