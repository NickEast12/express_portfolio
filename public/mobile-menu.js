// assigning varibles
    const hamburgerAgain = document.querySelector('.hamburger');
    const nav = document.querySelector('.mobile-overlay');
    const upArrow = document.querySelector('.up-arrow');
// mobile menu appear
    hamburgerAgain.addEventListener('click', () => {
    hamburger.classList.toggle("is-active"); 
    nav.style.transform = 'translateY(0%)';
    nav.style.position = 'fixed';
    nav.style.left = '0';
    hamburger.classList.toggle("is-active"); 
    });
// mobile menu collapse + cross animation
    upArrow.addEventListener('click', () =>{
        // nav.style.transform = 'translateY(-100vh)';
        nav.style.transform = 'translateY(-100vh)';
        nav.style.opacity = '1';
        hamburger.classList.toggle("is-active");
   
   
    
    });
