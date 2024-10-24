var counter = 0;
var pfpClicker = document.getElementById("pfpClicker");
var scoreSpan =  document.getElementById("scoreSpan");


// 
pfpClicker.onclick = function()
{
    addScore();
};

// 
function addScore()
{
    counter++;
    scoreSpan.style.display = "block"; /* Show the score */
}

var updateScore = setInterval(function()
    {
        scoreSpan.innerHTML = counter;
    }, 10);