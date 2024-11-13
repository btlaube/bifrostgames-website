// Get references to the buttons
const clickerButton = document.getElementById('clicker-button');
const scrollerButton = document.getElementById('scroller-button');

if (clickerButton)
    {
        // Assign onclick event to open clicker.html
        clickerButton.onclick = () => {
            window.location.href = './clicker.html';
        };
    }
    
    if (scrollerButton)
    {
            // Assign onclick event to open scroller.html
        scrollerButton.onclick = () => {
            window.location.href = './scroller.html';
        };
    }