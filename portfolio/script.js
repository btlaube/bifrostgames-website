var counter = 0;
var pfpClicker = document.getElementById("pfpClicker");
var profileImage = document.getElementById('profileImage');
var scoreSpan =  document.getElementById("scoreSpan");
var scoreText = document.getElementById("score");

// Array of image sources for animation frames
const imageFrames = [
    '/assets/img/PfpFrames/Frame1.png',
    '/assets/img/PfpFrames/Frame2.png',
    '/assets/img/PfpFrames/Frame3.png'
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
        currentFrame = (currentFrame + 1) % imageFrames.length;
        profileImage.src = imageFrames[currentFrame];
    }, 200); // Change frame every 200ms (adjust as needed)
}

var updateScore = setInterval(function()
    {
        scoreSpan.innerHTML = counter;
    }, 10);