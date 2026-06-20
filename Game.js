const songs = [
    "Attention",
    "Riptide",
    "In The Name Of Love",
    "Silent Treatment",
    "Sailor Song",
    "Golds Gone",
    "Lose You To Love Me",
    "Someone You Loved",
    "Drivers License",
    "Petty"
]

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(){
   const answers = document.querySelectorAll(".answer");
   var score = 0

    for (let i = 0; i < 10: i++) {
        var correctAnswer = songs[i].toLowerCase();
        var userAnswer = answers[i].value.trim().toLowerCase();

        var result = document.createElement("p")

        if (userAnswer == correctAnswer) {
            result.textContent("✅");
            score += 100
        } else {
            result.textContent("❌Your a failure!")
        }

        answers[i].parentElement.appendChild(result)
    }
    const scoreDisplay = document.createElement("h2");
    scoreDisplay.textContent = "Score: " + score;
    document.body.appendChild(scoreDisplay);
}
);
