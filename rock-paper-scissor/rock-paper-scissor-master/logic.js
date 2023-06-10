let userEl = document.getElementById("user-id");
let computerEl = document.getElementById("computer-id");
let optionsEl = document.getElementById("options");
let resultEl = document.getElementById("result-id")
let userChoice = ""
let computerChoice = ""

let elements = ["rock✊", "paper🖐", "scissor✌"];

const start = (event) => {
    userChoice = event.target.innerHTML;
    computerChoice = elements[Math.floor(Math.random() * elements.length)]
    computerEl.innerHTML = "Computer : " + computerChoice
    userEl.innerHTML = "User : " + userChoice
    result()
}

function result() {
    if (userChoice === computerChoice) {
        resultEl.innerHTML = "Result : It's a tie"
    } else if (userChoice === "rock✊") {
        if (computerChoice === "paper🖐") {
            resultEl.innerHTML = "Result : Computer WINS"
        } else {
            resultEl.innerHTML = "Result : You WON!!!"
        }

    } else if (userChoice === "paper🖐") {
        if (computerChoice === "scissor✌") {
            resultEl.innerHTML = "Result : Computer WINS"
        } else {
            resultEl.innerHTML = "Result : You WON!!!"
        }

    } else if (userChoice === "scissor✌") {
        if (computerChoice === "rock✊") {
            resultEl.innerHTML = "Result : Computer WINS"
        } else {
            resultEl.innerHTML = "Result : You WON!!!"
        }

    }
}

elements.forEach(choice => {
    const button = document.createElement("button")
    button.innerHTML = choice
    optionsEl.append(button)
    button.addEventListener("click", start);

})











/*
var choices = ["rock", "paper", "scissors"];
var map = {};

choices.forEach(function(choice, i) {
    map[choice] = {};
    map[choice][choice] = "Was a tie"
    map[choice][choices[(i + 1) % 3]] = choices[(i + 1) % 3] + " wins"
    map[choice][choices[(i + 2) % 3]] = choice + " wins"
})

function compare(choice1, choice2) {
    return (map[choice1] || {})[choice2] || "Invalid choice";
}

function start() {
    console.log(compare);
}
*/