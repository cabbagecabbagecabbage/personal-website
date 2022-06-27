const toggleButton = document.getElementsByClassName('toggle-button')[0];
const mainNavLinks = document.getElementsByClassName('main-nav-links')[0];

toggleButton.addEventListener('click', () => {
    mainNavLinks.classList.toggle('active');
});