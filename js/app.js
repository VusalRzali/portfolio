const burgerButton = document.querySelector('.navbar-toggle');
const navBar = document.querySelector('.navbar');

burgerButton.addEventListener('click', () => {
    navBar.classList.toggle("show");
}) 

function myFunction(e) {
    const item = document.querySelector(".active");
    if(item !== null){
        item.classList.remove("active");
    }
   e.target.className = "active";
}


let i = 0;
let txt = 'Developer';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".animation").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()