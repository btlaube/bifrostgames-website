/* Jump vars */
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var saveDataButton = document.getElementById("saveDataButton");
var loadDataButton = document.getElementById("loadDataButton");
var clearDataButton = document.getElementById("clearDataButton");
var resetButton = document.getElementById("resetButton");
var startModal = document.getElementById("startModal");
var startModalText = document.getElementById("startModalText");
var startButton = document.getElementById("startButton");

/* Clicker vars */
var counter = 0;
var clicker = document.getElementById("button1");
var clickerImage = document.getElementById('button1-image');
var scoreSpan =  document.getElementById("scoreSpan");

// Test




/* Jump code */
function jump()
{
    if(character.classList.contains("animate")){ return; }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);
}

// Show start modal
startModalText.innerHTML = "Play the jump game!";
startModal.style.display = "block";

startButton.onclick = function()
{
    startModal.style.display = "none";
    startGame();
};

// Function to start the game
function startGame()
{
    counter = 0;
    block.style.animation = "block 1s infinite linear";
}

// var checkDead = setInterval(function()
//     {
//         let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//         // Check if block is at player down position and check if player is in down (not jumping) position
//         if(blockLeft < 17 && blockLeft > -17 && characterTop >= 130){
//             block.style.animation = "none";
//             showModal();
//         } else {
//             counter++;
//             document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
//         }
//     }, 10);

function showModal()
{
    modal.style.display = "block";
    modalText.innerHTML = "Game Over. Score: " + Math.floor(counter / 100);
}

// Close modal and restart game
saveDataButton.onclick = function()
{
    // Save data
    localStorage.setItem("clickCount", counter);
};

loadDataButton.onclick = function()
{
    // Check for data to retrieve
        // If not, do not overwrite current progress
    // Retrieve data
    const savedClickCount = localStorage.getItem("clickCount");
    counter = savedClickCount;
};

clearDataButton.onclick = function()
{
    // Clear saved data
    localStorage.removeItem("clickCount");
};

resetButton.onclick = function()
{
    // Reset progress
    counter = 0;
};

/* Clicker code */
clicker.onclick = function()
{
    addScore();
    updateScore();
};

function addScore()
{
    counter++;
}

var updateScore = setInterval(function() {
    scoreSpan.innerHTML = counter;
}, 100);
