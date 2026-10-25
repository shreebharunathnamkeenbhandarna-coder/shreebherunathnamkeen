// ===============================

// IMAGE SLIDER

// ===============================

const images = [

"images/1.jpg",

"images/2.jpg",

"images/3.jpg"

];

let currentSlide = 0;

function changeSlide() {

const slide = document.getElementById("slide");



if (slide) {

    currentSlide++;



    if (currentSlide >= images.length) {

        currentSlide = 0;

    }



    slide.src = images[currentSlide];

}

}

setInterval(changeSlide, 3000);

// ===============================

// ADD TO CART

// ===============================

let cart = 0;

function addToCart() {

cart++;



const cartCount = document.getElementById("cart-count");



if (cartCount) {

    cartCount.innerHTML = cart;

}



alert("✅ Product Added To Cart");

}

// ===============================

// SEARCH

// ===============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("keyup", function () {



    const value = this.value.toLowerCase();



    const products = document.querySelectorAll(

        ".product-card,.best-card,.category-card"

    );



    products.forEach(function (item) {



        if (

            item.innerText.toLowerCase().includes(value)

        ) {



            item.style.display = "block";



        } else {



            item.style.display = "none";



        }



    });



});

}

// ===============================

// SMOOTH SCROLL

// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function(link){

link.addEventListener("click",function(e){



    e.preventDefault();



    const target=document.querySelector(this.getAttribute("href"));



    if(target){



        target.scrollIntoView({



            behavior:"smooth"



        });



    }



});

});

// ===============================

// HEADER SHADOW

// ===============================

window.addEventListener("scroll",function(){

const header=document.querySelector("header");



if(window.scrollY>80){



    header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";



}else{



    header.style.boxShadow="0 5px 20px rgba(0,0,0,.1)";



}

});

// ===============================

// BACK TO TOP BUTTON

// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆️";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="100px";

topBtn.style.right="25px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#ff5722";

topBtn.style.color="white";

topBtn.style.fontSize="24px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

window.addEventListener("scroll",function(){

if(window.scrollY>400){



    topBtn.style.display="block";



}else{



    topBtn.style.display="none";



}

});

topBtn.onclick=function(){

window.scrollTo({



    top:0,



    behavior:"smooth"



});

};

// ===============================

// WELCOME MESSAGE

// ===============================

window.onload=function(){

console.log("✅ Shree Bherunath Namkeen Website Loaded Successfully");

};
