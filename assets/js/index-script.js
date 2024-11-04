// Select all buttons with the animButton class
var buttons = document.querySelectorAll('.animButton');

// Select all hiddenButton
var hiddenButtons = document.querySelectorAll('.hidden-button');
// Select all hiddenAward
var awards = document.querySelectorAll(".hidden-award")
var hiddenAwardCounter = 0;
// Hidden award glow test
var bannerImage = document.getElementById("banner-image");
var bannerHr = document.getElementById("banner-hr");

// Attach event listeners to each button
buttons.forEach(button => {
    button.onclick = function() {
        animateBorder(button);
    };
});

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value
    const g = Math.floor(Math.random() * 256); // Random green value
    const b = Math.floor(Math.random() * 256); // Random blue value
    return { r, g, b };
}

// Function to trigger border animation with a random color
function animateBorder(button) {
    if (button.classList.contains("active")) { return; }
    
    // Generate a random RGB color and set it to the button's border
    const color = getRandomColor();
    const borderColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    const transparentBorderColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0)`;

    // Apply the colors to the button's ::after pseudo-element
    button.style.setProperty('--border-color', borderColor);
    button.style.setProperty('--transparent-border-color', transparentBorderColor);

    // Add the active class to start the animation
    button.classList.add('active');

    // Remove the active class after animation ends
    setTimeout(() => {
        button.classList.remove('active');
    }, 500); // Matches the duration of the CSS animation
}

// Hidden buttons
hiddenButtons.forEach(button => {
    button.onclick = function() {
        // animateBorder(button);
        revealHidden(button);
    };
});

function revealHidden(button) {
    button.style.display = "none";
    awards[hiddenAwardCounter].style.display = "inline";
    hiddenAwardCounter++;
    if (hiddenAwardCounter == 3)
        activateShine();
}

function activateShine()
{
    // Change banner image to glow image
    bannerImage.src = "https://bifrostgames.org/assets/img/BannerLogo_Bifrost_Gold_Blur.png";
    // Change all hidden awards image from white to gold
    awards.forEach(award => {
        // Select the inner <img> tag within each award element
        const imgTag = award.querySelector("img");
        if (imgTag) { // Check if the <img> tag exists
            imgTag.src = "https://bifrostgames.org/assets/img/Icons/HiddenAwardGold.png";
        }
    });
    // Change banner hr to gold
    bannerHr.style.borderColor = "#ffd700";
}