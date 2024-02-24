var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function bubbleCreator() {
    var bubble = '';

    for (var i = 1; i <= 153; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#bubble-box-bottom-part-2").innerHTML = bubble;
}

var timer = 60;
var score = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function runTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#bubble-box-bottom-part-2").innerHTML = `Game Over`;
            timerInterval.style.color = "#fff";
        }
    }, 1000);
}

// Select the element with the ID "bubble-box-bottom-part2"
document.querySelector("#bubble-box-bottom-part-2").addEventListener("click", function (event) {
    // Log the target element's text content (the number in the bubble clicked)
    var clicked = Number(event.target.textContent);
    
    // Check if the clicked number matches the current hit number
    if (clicked === hitrn) {
        increaseScore();
        bubbleCreator();
        // Assuming makeBubble() is a function to handle making new bubbles
        // makeBubble();
        getNewHit();
    }
});

// Initial setup: create bubbles, start timer, get new hit, and increase score
bubbleCreator();
runTimer();
getNewHit();
