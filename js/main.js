document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section");
    
    

    sections.forEach(function (section) {
        // Remove the blackout class initially 
        sections.forEach(function (s) {
            s.classList.remove("blacked-out");
        });
            section.addEventListener("mouseenter", function () {
                // Remove the blackout class from all sections
                sections.forEach(function (s) {
                    s.classList.remove("blacked-out");
            });
            
            

            // Add the blackout class to all sections except the current one
            sections.forEach(function (s) {
                if (s !== section) {
                    s.classList.add("blacked-out");
                }
            });

            // Add a class to highlight the current section
            section.classList.add("highlighted-section");
        });

        section.addEventListener("mouseleave", function () {
            // Remove the blackout and highlighted classes from all sections
            sections.forEach(function (s) {
                s.classList.remove("blacked-out", "highlighted-section");
            });
        });
    });
});


// Curtain menu functions
function toggleCurtainMenu() {
    var curtainMenu = document.querySelector('.curtain-menu');
    curtainMenu.classList.toggle('show-curtain-menu');
}

function closeCurtainMenu() {
    var curtainMenu = document.querySelector('.curtain-menu');
    curtainMenu.classList.remove('show-curtain-menu');
}

// Event listener for curtain menu links
document.addEventListener('DOMContentLoaded', function () {
    var curtainMenuLinks = document.querySelectorAll('.curtain-menu a');

    curtainMenuLinks.forEach(function (link) {
        link.addEventListener('click', closeCurtainMenu);
    });
});