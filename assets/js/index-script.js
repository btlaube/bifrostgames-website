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

const games = [
    {
        title: "Shadow Retriever",
        date: "July 10, 2024",
        description: "puts you in the role of the alchemist’s shadow, summoned to retrieve powerful lost artifacts. Explore the alchemist's lair and unlock new alchemical abilities from the items you collect to aid in your quest.",
        playLink: "https://bifrostgames.itch.io/shadow-retriever",
        sourceLink: "https://github.com/btlaube/ShadowRetriever",
        imageSrc: "/assets/img/Games/SR_Cover.png",
        // role: "Lead Developer & Designer",
        techStack: "Unity, C#, Blender, Audacity",
        jam: "Pirate Software Game Jam 15",
        keyFeatures: [
            "Ability Progression: Unlock unique powers tied to collected artifacts, offering players new movement capabilities to overcome obstacles.",
            "Dynamic Level Progression: ",
            "Artistic, atmospheric visuals and sound design."
        ]
    },
    {
        title: "Shifty Scales",
        date: "August 20, 2024",
        description: "is a puzzle game where you run a shop that fixes mis-scaled items with a special scale-shifting machine. Solve tricky puzzles and satisfy customer orders by resizing and reassembling objects.",
        playLink: "https://bifrostgames.itch.io/shifty-scales",
        sourceLink: "https://github.com/btlaube/GMTK2024GameSubmission",
        imageSrc: "/assets/img/Games/SS_Cover.png",
        // role: "Lead Developer & Puzzle Designer",
        techStack: "Unity, C#, Aseprite, Audacity, GIMP",
        jam: "GMTK Game Jam 2024",
        keyFeatures: [
            "Unique puzzle mechanics: Swap or match the scales of various objects to solve puzzles.",
            "Drag-and-drop gameplay: Use the scale-shifting machine to reassemble items to their correct sizes.",
            "Completed in 96 hours for GMTK 2024 Game Jam"
        ]
    },
    {
        title: "Vice's Grip",
        date: "May 5, 2024",
        description: "is a fast-paced escape game where you're trapped by the Trash Compactor Killer. Can you escape the deadly compactor before it's too late?",
        playLink: "https://bifrostgames.itch.io/vice-grip",
        sourceLink: "",
        imageSrc: "/assets/img/Games/VG_Cover.png",
        // role: "Game Designer & Level Designer",
        techStack: "Unity, C#, Photoshop",
        keyFeatures: [
            "Challenging platforming and combat mechanics.",
            "Symbolic representation of vices through level design.",
            "Unique boss fights with mechanics tied to specific vices."
        ]
    }
];

const gameContent = document.getElementById("game-content");
const dotsContainer = document.getElementById("dots-container");

let currentGameIndex = 0; // Start with the first game
let lastDirection = null; // Track the last direction of transition

// Function to create the dots indicator
function createDots() {
    dotsContainer.innerHTML = "";
    games.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === currentGameIndex) {
            dot.classList.add("active");
        }

        // Click a dot to go to the corresponding game
        dot.addEventListener("click", () => {
            updateGameContent(index, null); // Update content
            pauseAndResumeAutoScroll(); // Pause auto-scroll and resume after a delay
        });

        dotsContainer.appendChild(dot);
    });
}

// Function to update the highlighted dot
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentGameIndex);
    });
}

// Function to update game content with slide and fade transition, and direction parameter
function updateGameContent(newIndex, direction) {
    // Loop the game index if necessary
    if (newIndex < 0) {
        newIndex = games.length - 1; // Go to the last game if it's the first one
    } else if (newIndex >= games.length) {
        newIndex = 0; // Go to the first game if it's the last one
    }

    const game = games[newIndex];
    gameContent.style.opacity = 0;

    // Handle the direction for sliding
    let slideDirection = "none";
    if (direction === 'prev') {
        slideDirection = "translateX(200px)"; // Slide from the left to the right
    } else if (direction === 'next') {
        slideDirection = "translateX(-200px)"; // Slide from the right to the left
    } else if (lastDirection === 'prev') {
        slideDirection = "translateX(-200px)"; // If last was 'prev', slide this one in from the left
    } else if (lastDirection === 'next') {
        slideDirection = "translateX(200px)"; // If last was 'next', slide this one in from the right
    }

    // Step 1: Fade and slide out old game
    gameContent.style.transform = slideDirection;
    gameContent.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    gameContent.style.opacity = 0;

    // Step 2: Update the content (new game)
    setTimeout(() => {
        gameContent.innerHTML = `
            <div class="element-box">
                <div class="image-text-container">
                    <button class="animButton">
                        ${game.imageSrc ? `<a>
                            <img src="${game.imageSrc}" alt="${game.title || 'Game'} Cover Image">
                        </a>` : ''}
                    </button>
                    <div class="text-container">
                        ${game.title ? `<a class="subtle-link" href="${game.playLink || '#'}" target="_blank">
                            <h2>${game.title}</h2>
                        </a>` : ''}
                        ${game.date ? `<h3>Release Date: ${game.date}</h3>` : ''}
                        ${game.description ? `<p><strong>${game.title || 'Untitled'}</strong> ${game.description}</p>` : ''}
                        ${game.jam ? `<p><strong>Submission to ${game.jam || 'Untitled'}</strong></p>` : ''}
                        <div class="element-box links-section">
                            ${game.playLink ? `<a class="link" href="${game.playLink}" target="_blank">Play Demo</a>` : ''}
                            ${game.sourceLink ? `<a class="link" href="${game.sourceLink}" target="_blank">Source Code</a>` : ''}
                        </div>
                    </div>
                </div>
                ${game.techStack ? `<p><strong>Tech Stack:</strong> ${game.techStack}</p>` : ''}
            </div>
        `;

        // Removed Key features
        // TODO: Return once all key features are written
                    // ${game.keyFeatures ? `
                    //     <div class="key-features">
                    //         <h3>Key Features:</h3>
                    //         <ul>
                    //             ${game.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    //         </ul>
                    //     </div>` : ''}
        
        // Step 3: Before fading in, move the new game to the opposite direction
        gameContent.style.transition = "transform 0s"; // Instant transition for moving off-screen
        gameContent.style.transform = direction === 'prev' ? "translateX(-200px)" : "translateX(200px)";

        // Step 4: Fade in and slide the new game to the center
        setTimeout(() => {
            gameContent.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            gameContent.style.transform = "translateX(0)";
            gameContent.style.opacity = 1;
            updateDots(); // Update the dots for active game
        }, 50); // Small delay to allow the off-screen move to happen first

    }, 500); // Time for the old game to fade and slide out

    // Update the current game index and store the direction
    currentGameIndex = newIndex;
    lastDirection = direction; // Store the direction of the current transition
}

// Function to pause and resume auto-scroll
function pauseAndResumeAutoScroll() {
    clearInterval(autoScroll); // Stop the auto-scroll

    // Restart the auto-scroll after a delay equal to `scrollInterval`
    autoScroll = setInterval(() => updateGameContent(currentGameIndex + 1, "next"), scrollInterval);
}


// Initial setup
updateGameContent(currentGameIndex, null); // Load first game without direction
createDots();
// Set interval for auto-scrolling