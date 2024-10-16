const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 500){
        navEl.classList.add('navbar-scrolled');
    }
    else{
        navEl.classList.remove('navbar-scrolled');
    }
});