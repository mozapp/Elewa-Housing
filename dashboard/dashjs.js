const hamburger = document.querySelector(".btnToggleSidebar");

hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});