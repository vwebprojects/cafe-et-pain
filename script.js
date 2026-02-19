const navLinks = document.querySelectorAll('.nav_link');
const navInput = document.querySelector('.nav_input');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navInput.checked = false;
    });
});

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>100);
})
