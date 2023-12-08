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

document.addEventListener("DOMContentLoaded", function () {
    // Create footer element
    var footer = document.createElement("footer");
    
    // Get the current year using JavaScript's Date() method
    var currentYear = new Date().getFullYear();
    
    // Set the copyright text with the current year
    footer.innerHTML = "&copy; " + currentYear + " Xyan Xue. All rights reserved.";
    
    // Append the footer to the body
    document.body.appendChild(footer);
});

document.addEventListener("DOMContentLoaded", function () {
    var alertButton = document.getElementById("btn-alert");

    alertButton.addEventListener("click", function () {
        alert("Hello world!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var hoverButton = document.getElementById("btn-hover");

    hoverButton.addEventListener("mouseover", function () {
        hoverButton.innerText = "New Button Label";
    });

    hoverButton.addEventListener("mouseleave", function () {
        hoverButton.innerText = "Default Button Label";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var count = 1;
    var counterButton = document.getElementById("btn-counter");
    var counterText = document.getElementById("txt-counter");

    counterButton.addEventListener("click", function () {
        count++;
        counterText.innerHTML = "Number: " + count;
        
        // Check if the number is even or odd and apply the appropriate class
        if (count % 2 === 0) {
            counterText.classList.remove("odd");
            counterText.classList.add("even");
        } else {
            counterText.classList.remove("even");
            counterText.classList.add("odd");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var numbersList = document.getElementById("numbers");

    for (let i = 1; i <= 100; i++) {
        var listItem = document.createElement("li");
        
        // Set the text content of the new <li> element
        listItem.textContent = i % 2 === 0 ? "even" : "odd";
        
        // Append the <li> element to your ordered list
        numbersList.appendChild(listItem);
    }
});

for (let i = 1; i <= 100; i++) {
    // ... (same as above)
}

// Alert Button
var alertButton = document.getElementById("btn-alert");

// Hover Button
var hoverButton = document.getElementById("btn-hover");
hoverButton.addEventListener("mouseover", function () {
    hoverButton.innerText = "New button label";
});

hoverButton.addEventListener("mouseleave", function () {
    hoverButton.innerText = "Hover over me";
});

// Hover Button with Java Insertion
var hoverJavaButton = document.getElementById("btn-hover-java");
hoverJavaButton.addEventListener("mouseover", function () {
    hoverJavaButton.innerText = "Dynamic label from Java";
});

hoverJavaButton.addEventListener("mouseleave", function () {
    hoverJavaButton.innerText = "Hover over me (Java Insertion)";
});