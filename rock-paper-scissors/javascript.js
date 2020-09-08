let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("green-glow") }, 500);
}

function lose(userChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("red-glow") }, 500);
}

function draw(userChoice) {
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("gray-glow") }, 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
            win(userChoice);
            resultDiv.innerHTML = "Paper covers rock. You win!"
            break;
        case "rs":
            win(userChoice);
            resultDiv.innerHTML = "Rock smashes scissors. You win!"
            break;
        case "sp":
            win(userChoice);
            resultDiv.innerHTML = "Scissors cuts paper. You win!"
            break;
        case "rp":
            lose(userChoice);
            resultDiv.innerHTML = "Rock is covered by paper. You lose..."
            break;
        case "ps":
            lose(userChoice);
            resultDiv.innerHTML = "Paper is cut by scissors. You lose..."
            break;
        case "sr":
            lose(userChoice);
            resultDiv.innerHTML = "Scissors are smashed by rock. You lose..."
            break;
        case "rr":
            draw(userChoice);
            resultDiv.innerHTML = "Rock equals rock. Its a draw."
            break;
        case "ss":
            draw(userChoice);
            resultDiv.innerHTML = "Scissors equals scissors. Its a draw."
            break;
        case "pp":
            draw(userChoice);
            resultDiv.innerHTML = "Paper equals paper. Its a draw."
            break;
    }
}


function main() {

    rockDiv.addEventListener("click", function () {
        game("r");
    })

    paperDiv.addEventListener("click", function () {
        game("p");
    })

    scissorsDiv.addEventListener("click", function () {
        game("s");
    })

}




main();
