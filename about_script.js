// ==================== HAMBURGER MENU FUNCTIONALITY ====================

const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinks = navMenu.querySelectorAll('a');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Close menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});