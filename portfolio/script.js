var counter = 0;
var pfpClicker = document.getElementById("pfpClicker");
var scoreSpan =  document.getElementById("scoreSpan");
var scoreText = document.getElementById("score");


// 
pfpClicker.onclick = function()
{
    addScore();
};

// 
function addScore()
{
    counter++;
    scoreText.style.display = "block"; /* Show the score */
}

var updateScore = setInterval(function()
    {
        scoreSpan.innerHTML = counter;
    }, 10);