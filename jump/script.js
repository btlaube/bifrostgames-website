var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var modal = document.getElementById("gameOverModal");
var modalText = document.getElementById("modalText");
var restartButton = document.getElementById("restartButton");
var quitButton = document.getElementById("quitButton");

function jump(){
    if(character.classList.contains("animate")){ return; }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > -20 && characterTop >= 130){
        block.style.animation = "none";
        showModal();
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);

function showModal() {
    modal.style.display = "block";
    modalText.innerHTML = "Game Over. Score: " + Math.floor(counter / 100);
}

// Close modal and restart game
restartButton.onclick = function() {
    modal.style.display = "none";
    counter = 0;
    block.style.animation = "block 1s infinite linear";
};

// Quit game (for demo purposes, you can customize what "Quit" does)
quitButton.onclick = function() {
    modal.style.display = "none";
    alert("Thanks for playing!"); 
    // You could redirect or perform another action here
};
