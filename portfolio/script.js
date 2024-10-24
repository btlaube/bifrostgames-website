var counter = 0;
var pfpClicker = document.getElementById("restartpfpClickerButton");


// 
pfpClicker.onclick = function()
{
    addScore();
};

// 
function addScore()
{
    counter++;
    block; /* Show the score */
}

var updateScore = setInterval(function()
    {
        document.getElementById("scoreSpan").innerHTML = counter;
    }, 10);