// scroll menu change - 
let menuScroll = () => {
    let hamburgerMenu = document.querySelector('.hamburger');
    let introPosition = hamburgerMenu.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 100;
    let ypos = window.pageYOffset;
    if (ypos > 100) {
        hamburgerMenu.style.background = "rgba(0,199,140,1)";
        hamburgerMenu.style.marginTop = '1em';
    }else if (ypos === 0) {
        hamburgerMenu.style.background = "none";
        hamburgerMenu.style.marginTop = '0';
    }

    // introPosition < screenPosition
}
window.addEventListener('scroll', menuScroll);
