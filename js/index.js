// Your code goes here

// nav buttons change to pink and get big on click, revert on second click

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
         event.preventDefault();
    }))
})

//Welcome To Fun Bus goes pink on click

let funBusWelcome = document.querySelector(".intro h2");
funBusWelcome.addEventListener('click', (function() {
    funBusWelcome.style.color = "hotpink";
}))

// Let's Go goes pink when text is copied

let letsGo = document.querySelector(".text-content h2");
letsGo.addEventListener('copy', (function() {
    letsGo.style.color = "hotpink";
}))

// images all get bigger when mouseover, revert when mouse off

let allImg = document.querySelectorAll("img");
allImg.forEach(function(element) {
    element.addEventListener('mouseover', (function() {
        element.style.maxWidth = "150%";
    }))
    element.addEventListener('mouseleave', (function() {
        element.style.maxWidth = "100%";
    }))
})

// bottom image goes away when double clicked

let lastImg = document.querySelector(".content-destination img");
lastImg.addEventListener('dblclick', (function() {
    lastImg.style.display = "none";
}))

// wheel spin on left button changes page drastically, revert on right button wheel spin

let leftBottomButton = document.querySelector(".content-pick div:nth-child(1) .btn");
let middleBottomButton = document.querySelector(".content-pick div:nth-child(2) .btn");
let rightBottomButton = document.querySelector(".content-pick div:nth-child(3) .btn");
let containerBody = document.querySelector("body");
let contentDivs = document.querySelectorAll(".text-content");
leftBottomButton.addEventListener('wheel', (function() {
    containerBody.style.backgroundColor = "hotpink";
    containerBody.style.fontFamily = "Wingdings";
    contentDivs.forEach(function(element) {
        element.style.border = "2px dotted black";
        element.style.backgroundColor = "gray";
    })
}))

rightBottomButton.addEventListener('wheel', (function() {
    containerBody.style.backgroundColor = null;
    containerBody.style.fontFamily = null;
    contentDivs.forEach(function(element) {
        element.style.border = null;
        element.style.backgroundColor = null;
    })
}))

// middle button right click creates and appends a new button

let buttonContainer = document.querySelector(".content-pick div:nth-child(2)");
middleBottomButton.addEventListener('contextmenu', (function() {
    let newButton = document.createElement("div");
    newButton.classList.add("btn");
    newButton.textContent = "Jeff is Awesome!";
    buttonContainer.appendChild(newButton);
}))