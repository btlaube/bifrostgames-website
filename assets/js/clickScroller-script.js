var startModal = document.getElementById("startModal");
var startModalText = document.getElementById("startModalText");
var startButton = document.getElementById("startButton");
// Get references to the buttons
const clickerButton = document.getElementById('clicker-button');
const scrollerButton = document.getElementById('scroller-button');

// Show start modal
startModalText.innerHTML = "Play Click Scroller!";
startModal.style.display = "block";

startButton.onclick = function()
{
    startModal.style.display = "none";
};

// Assign onclick event to open clicker.html
clickerButton.onclick = () => {
    window.location.href = '/clicker.html';
};

// Assign onclick event to open scroller.html
scrollerButton.onclick = () => {
    window.location.href = '/scroller.html';
};
