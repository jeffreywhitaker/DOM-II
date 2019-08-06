// Your code goes here
let navButtons = document.querySelectorAll('nav a');
navButtons.forEach(function(element) {
    element.addEventListener('click', (function() {
        if (element.style.backgroundColor !== "hotpink") {
           element.style.backgroundColor = "hotpink"; 
        } else {
            element.style.backgroundColor = "white";
        };
        if (element.style.fontSize !== "50px") {
            element.style.fontSize = "50px"; 
         } else {
             element.style.fontSize = null;
         };
    }))
})

let funBusWelcome = document.querySelector(".intro h2");
funBusWelcome.addEventListener('click', (function() {
    funBusWelcome.style.color = "hotpink";
}))

let letsGo = document.querySelector(".text-content h2");
letsGo.addEventListener('copy', (function() {
    letsGo.style.color = "hotpink";
}))

let allImg = document.querySelectorAll("img");
allImg.forEach(function(element) {
    element.addEventListener('mouseover', (function() {
        element.style.maxWidth = "150%";
    }))
    element.addEventListener('mouseleave', (function() {
        element.style.maxWidth = "100%";
    }))
})