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

// Sample data dictionary
var stats = {
    "strength": 10,
    "agility": 8,
    "intelligence": 15,
    "endurance": 12,
    "luck": 5
};

// Sample data dictionary
var inventory = {
    "coal": 10,
    "copper": 8,
    "iron": 15,
    "sulfur": 12,
    "magnesium": 5
};

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

    // Save other data
    // Call the function to save stats
    saveStatsToLocalStorage(stats);
    // Call the function to save inventory items
    saveInventoryToLocalStorage(inventory);
};

// Function to save each stat to localStorage
function saveStatsToLocalStorage(statDict) {
    for (let stat in statDict) {
        if (statDict.hasOwnProperty(stat)) { // Check if it’s a direct property of the object
            localStorage.setItem(stat, statDict[stat]);
        }
    }
}

// Function to save each item to localStorage
function saveInventoryToLocalStorage(inventoryDict) {
    for (let item in inventoryDict) {
        if (inventoryDict.hasOwnProperty(item)) { // Check if it’s a direct property of the object
            localStorage.setItem(item, inventoryDict[item]);
        }
    }
}

loadDataButton.onclick = function()
{
    // TODO: Check for data to retrieve
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
    // TODO: add auto save feature
};

function addScore()
{
    counter++;
}

// Update stat displays
// Score
var updateScore = setInterval(function() {
    scoreSpan.innerHTML = counter;
    updateInventory(inventory);
    updateStats(stats);
}, 100);

// Stats
function updateStats(statsDict) {
    for (const [key, value] of Object.entries(statsDict)) {
        const nameElement = document.getElementById(`${key.toLowerCase()}-name`);
        const countElement = document.getElementById(`${key.toLowerCase()}-count`);

        if (nameElement && countElement) {
            nameElement.innerHTML = key; // Display the stat name
            countElement.innerHTML = value; // Display the stat value
        }
    }
}

// Inventory
function updateInventory(inventoryDict) {
    for (const [key, value] of Object.entries(inventoryDict)) {
        const nameElement = document.getElementById(`${key.toLowerCase()}-name`);
        const countElement = document.getElementById(`${key.toLowerCase()}-count`);

        if (nameElement && countElement) {
            nameElement.innerHTML = key; // Display the stat name
            countElement.innerHTML = value; // Display the stat value
        }
    }
}



