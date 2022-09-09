var menuIcon =document.querySelector(".menu-icon");
var sidebar =document.querySelector(".sidebar");
var container =document.querySelector(".container");
menuIcon.onClick= function(){
    sidebar.classList.toggle("small-sidebars");
container.classList.toggle("large-container")
}



