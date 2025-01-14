// Get all game containers
var games = document.querySelectorAll('.game');

games.forEach(game => {
    // Get the dock buttons and display image within this game container
    var buttons = game.querySelectorAll('.dock-button');
    var displayImage = game.querySelector('.display-image');

    // Attach event listeners to each button
    buttons.forEach(button => {
        button.onclick = function() {
            setDisplayImage(button, displayImage);
        };
    });
});

function setDisplayImage(button, displayImage) {
    // Assuming each button has an <img> child with the desired image source
    var buttonImage = button.querySelector('img');

    // Update the display image's source
    if (buttonImage) {
        displayImage.src = buttonImage.src;
    }
}
