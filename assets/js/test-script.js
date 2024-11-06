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

// Select all buttons with the itemButton class
var itemButtons = document.querySelectorAll('.itemButton');
var automators = document.querySelectorAll('.automator');

// Sample data dictionary
var stats = {
    "strength": 2,
    "agility": 2,
    "intelligence": 2,
    "endurance": 2,
    "luck": 2
};

// Sample data dictionary
var inventory = {
    "coal": 0,
    "copper": 0,
    "iron": 0,
    "sulfur": 0,
    "magnesium": 0
};

// Resource costs for each item (previous item required to unlock the next)
const resourceCosts = {
    "coal": 0,             // No cost for the first item
    "copper": 1,           // Requires coal to unlock
    "iron": 2,             // Requires copper to unlock
    "sulfur": 3,           // Requires iron to unlock
    "magnesium": 4         // Requires sulfur to unlock
};

// Mapping of required resources for each item
var requiredResources = {
    "copper": "coal",
    "iron": "copper",
    "sulfur": "iron",
    "magnesium": "sulfur"
};

var automatorRecipes = {
    "coal-automator": {"copper": 10},
    "copper-automator": {"iron": 10},
    "iron-automator": {"sulfur": 10},
    "sulfur-automator": {"magnesium": 10},
}

// Attach event listeners to each button
// automators.forEach(automator => {
//     // Get the item name from the button's ID by removing "-button"
//     const itemName = automator.id.split("-automator")[0]; // Extracts "coal" from "coal-button"
    
//     button.onclick = function() {
//         if (checkRecipe(automatorRecipes[automator]))
//     };
// });

// function buyAutomator(automatorName) {
//     if (checkRecipe(automatorName))
//         // Activate automator
//         console.log($`purchased: {automatorName}`);

//     // Update the displayed inventory
//     updateInventory(inventory);
//     checkButtonAvailability();
// }

function checkAutomatorAvailabilityAll()
{
    document.querySelectorAll('.automator').forEach(automator => {
        const automatorName = automator.id;
        automator.disabled = !(checkAutomatorAvailability(automatorName));
    });
}

// Function to check and update button availability based on inventory
function checkAutomatorAvailability(automator) {
        
    for (ingredient in automatorRecipes[automator])
    {
        // Enable the button if enough resources are available for the previous item
        if (inventory[ingredient] < automatorRecipes[automator][ingredient]) {
            return false; // cannot afford :(
        }
    }
    return true; // Can afford :)
}

// Show start modal
startModalText.innerHTML = "Play the jump game!";
startModal.style.display = "block";
updateInventory(inventory);
checkButtonAvailability();
checkAutomatorAvailabilityAll();


startButton.onclick = function()
{
    startModal.style.display = "none";
};

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

// Function to add an item to the inventory
function addItemToInventory(itemName, amount) {
    // Check if the item exists in the inventory
    if (inventory.hasOwnProperty(itemName)) {
        inventory[itemName] += amount; // Increment the count for the item
    }

    // Update the displayed inventory
    updateInventory(inventory);
    checkButtonAvailability();
    checkAutomatorAvailabilityAll();
}

// Function to add an item to the inventory
function removeItemFromInventory(itemName, amount) {
    // Check if the item exists in the inventory
    if (inventory.hasOwnProperty(itemName)) {
        inventory[itemName] -= amount; // Increment the count for the item
    }

    // Update the displayed inventory
    updateInventory(inventory);
    checkButtonAvailability();
    checkAutomatorAvailabilityAll();
}

// Attach event listeners to each button
itemButtons.forEach(button => {
    // Get the item name from the button text (lowercase)
    const itemName = button.querySelector('p').innerText.toLowerCase();
    
    button.onclick = function() {
        addItemToInventory(itemName, 1); // Pass the item name directly
        removeItemFromInventory(requiredResources[itemName], resourceCosts[itemName]);
    };
});

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

// Function to check and update button availability based on inventory
function checkButtonAvailability() {
    // Loop through each button and check if the player has enough resources
    document.querySelectorAll('.itemButton').forEach(button => {
        const itemName = button.querySelector('p').innerText.toLowerCase();
        const requiredResource = requiredResources[itemName];

        // Enable the button if enough resources are available for the previous item
        if (itemName === "coal" || (requiredResource && inventory[requiredResource] >= resourceCosts[itemName])) {
            button.disabled = false; // Enable button
        } else {
            button.disabled = true; // Disable button if not enough resources
        }
    });
}



