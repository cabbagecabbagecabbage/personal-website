$(document).ready(function(){
    $(function(){
        console.log("ok");
        $("#header").load("header.html", function() {
            const toggleButton = document.getElementsByClassName('toggle-button')[0];
            const mainNavLinks = document.getElementsByClassName('main-nav-links')[0];

            toggleButton.addEventListener('click', () => {
                mainNavLinks.classList.toggle('active');
            });
        }); 
        $("#footer").load("footer.html"); 
    });
});


