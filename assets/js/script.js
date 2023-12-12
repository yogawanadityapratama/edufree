const sideMenuIcon = document.getElementById('sidemenu-icon');
const sideMenu = document.getElementById('sidemenu');

sideMenuIcon.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});