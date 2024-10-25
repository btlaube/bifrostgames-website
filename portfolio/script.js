var counter = 0;
var pfpClicker = document.getElementById("pfpClicker");
var profileImage = document.getElementById('profileImage');
var scoreSpan =  document.getElementById("scoreSpan");
var scoreText = document.getElementById("score");
// Select all buttons with the animate-btn class
var buttons = document.querySelectorAll('.animate-btn');

// var shiftyScalesButton = document.getElementById("shiftyScalesButton");

// Array of image sources for animation frames
const imageFrames = [
    '../assets/img/PfpAnimFrames/Frame3.png',
    '../assets/img/PfpAnimFrames/Frame2.png',
    '../assets/img/PfpAnimFrames/Frame1.png'
];


// 
pfpClicker.onclick = function()
{
    addScore();
    animatePfp();
};

// 
function addScore()
{
    counter++;
    scoreText.style.display = "inline"; /* Show the score */
}

function animatePfp()
{
    let currentFrame = 0;
    let intervalId;
    
    // Clear any existing interval before starting a new one
    clearInterval(intervalId);
        
    // Animation logic - cycles through image frames
    intervalId = setInterval(function() {
        // Update the image source
        profileImage.src = imageFrames[currentFrame];
        // Move to the next frame
        currentFrame++;
        // Stop the interval after completing one loop
        if (currentFrame >= imageFrames.length) {
            clearInterval(intervalId); // Stop the animation
        }
    }, 200); // Change frame every 200ms (adjust as needed)
}

var updateScore = setInterval(function()
{
    scoreSpan.innerHTML = counter;
}, 10);

// Attach event listeners to each button
buttons.forEach(button => {
    button.onclick = function() {
        animateBorder(button);
    };
});

// Function to trigger border animation
function animateBorder(button) {
    if (button.classList.contains("active")) { return; }
    button.classList.add('active');

    // Remove the class after animation ends to allow retriggering on next click
    setTimeout(() => {
        button.classList.remove('active');
    }, 500); // Matches the duration of the CSS animation
}