let nav = document.querySelector(".nav");
let menu = document.querySelector('.menu');

menu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    nav.classList.toggle("active")
})

let features = document.querySelector(".feature");

let faAngleDown = document.querySelector(".fa-angle-down");
let featureSubList = document.querySelector(".features-sub-list")

features.addEventListener('click', () =>{
    faAngleDown.classList.toggle('active');
    featureSubList.classList.toggle('active');

})