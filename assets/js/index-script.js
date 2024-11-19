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
        title: "Shifty Scales",
        date: "August 20, 2024",
        description: "is a puzzle game where you run a shop that fixes mis-scaled items with a special scale-shifting machine. Solve tricky puzzles and satisfy customer orders by resizing and reassembling objects.",
        playLink: "https://bifrostgames.itch.io/shifty-scales",
        sourceLink: "https://github.com/btlaube/GMTK2024GameSubmission",
        imageSrc: "/assets/img/Games/SS_Cover.png",
        role: "Lead Developer & Puzzle Designer",
        techStack: "Unity, C#, Aseprite, Audacity, GIMP",
        keyFeatures: [
            "Unique puzzle mechanics: Swap or match the scales of various objects to solve puzzles.",
            "Drag-and-drop gameplay: Use the scale-shifting machine to reassemble items to their correct sizes.",
            "Completed in 96 hours for GMTK 2024 Game Jam"
        ]
    },
    {
        title: "Shadow Retriever",
        date: "July 10, 2024",
        description: "puts you in the role of the alchemist’s shadow, summoned to retrieve powerful lost artifacts. Explore the alchemist's lair and unlock new alchemical abilities from the items you collect to aid in your quest.",
        playLink: "https://bifrostgames.itch.io/shadow-retriever",
        sourceLink: "https://github.com/btlaube/ShadowRetriever",
        imageSrc: "/assets/img/Games/SR_Cover.png",
        role: "Lead Developer & Designer",
        techStack: "Unity, C#, Blender, Audacity",
        keyFeatures: [
            "Stealth mechanics: Navigate through levels by hiding in shadows.",
            "Unique shadow retrieval system with dynamic light interactions.",
            "Artistic, atmospheric visuals and sound design."
        ]
    },
    {
        title: "Vice's Grip",
        date: "May 5, 2024",
        description: "is a fast-paced escape game where you're trapped by the Trash Compactor Killer. Can you escape the deadly compactor before it's too late?",
        playLink: "https://bifrostgames.itch.io/vice-grip",
        sourceLink: "",
        imageSrc: "/assets/img/Games/VG_Cover.png",
        role: "Game Designer & Level Designer",
        techStack: "Unity, C#, Photoshop",
        keyFeatures: [
            "Challenging platforming and combat mechanics.",
            "Symbolic representation of vices through level design.",
            "Unique boss fights with mechanics tied to specific vices."
        ]
    }
    // ,
    // {
    //     title: "At Large",
    //     date: "March 12, 2024",
    //     description: "a top-down action game where you play as a fugitive on the run, trying to evade capture while completing various heist missions.",
    //     playLink: "https://bifrostgames.itch.io/at-large",
    //     sourceLink: "https://github.com/btlaube/AtLarge2",
    //     imageSrc: "/assets/img/Games/AL_Cover.png",
    //     role: "Lead Developer & Game Designer",
    //     techStack: "Unity, C#, Aseprite",
    //     keyFeatures: [
    //         "Dynamic heist mechanics with multiple approaches to missions.",
    //         "AI-driven police chase system.",
    //         "Procedural generation of some level elements."
    //     ]
    // },
    // {
    //     title: "Roll or Die",
    //     date: "July 25, 2023",
    //     description: "a dice-themed roguelike where you roll the dice to determine your abilities, facing randomized challenges with each roll.",
    //     playLink: "https://bifrostgames.itch.io/roll-or-die",
    //     sourceLink: "https://github.com/btlaube/GMTKGameJam",
    //     imageSrc: "/assets/img/Games/RD_Cover.png",
    //     role: "Game Developer & Designer",
    //     techStack: "Unity, C#",
    //     keyFeatures: [
    //         "Unique dice-rolling mechanics that influence combat and abilities.",
    //         "Procedurally generated dungeons and enemies.",
    //         "Developed in 48 hours for a game jam."
    //     ]
    // },
    // {
    //     title: "Deep Space Clean Up",
    //     date: "February 15, 2023",
    //     description: "a metroidvania game where you clean up abandoned space stations infested with alien life.",
    //     playLink: "https://bifrostgames.itch.io/deep-space-clean-up",
    //     sourceLink: "https://github.com/btlaube/MetroidvaniaJamGame",
    //     imageSrc: "/assets/img/Games/DSCU_Cover.png",
    //     role: "Game Designer & Programmer",
    //     techStack: "Unity, C#, Blender",
    //     keyFeatures: [
    //         "Classic metroidvania gameplay with unique cleaning mechanics.",
    //         "Exploration of interconnected space stations.",
    //         "Developed for Metroidvania Jam 2023."
    //     ]
    // }
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
                        <a href="${game.playLink}" target="_blank">
                            <img src="${game.imageSrc}" alt="${game.title} Cover Image">
                        </a>
                    </button>
                    <div class="text-container">
                        <a class="subtle-link" href="${game.playLink}" target="_blank">
                            <h2>${game.title}</h2>
                        </a>
                        <h3>Release Date: ${game.date}</h3>
                        <p><strong>${game.title}</strong> ${game.description}</p>
                        <div class="element-box links-section">
                            <a class="link" href="${game.playLink}" target="_blank">Play Demo</a>
                            <a class="link" href="${game.sourceLink}" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <p><strong>Role:</strong> ${game.role}</p>
                <p><strong>Tech Stack:</strong> ${game.techStack}</p>
            </div>
        `;
        
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
const scrollInterval = 8000; // Interval time in milliseconds
var autoScroll = setInterval(() => updateGameContent(currentGameIndex + 1, "next"), scrollInterval);