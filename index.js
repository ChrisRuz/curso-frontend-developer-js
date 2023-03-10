const nav_Email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

nav_Email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
