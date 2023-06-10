let cards = [];
let sum = 0;
let hasBlackjack = false;
let inGame = false;
let message = "";
let messageEl = document.getElementById("message-id");
let titleEl = document.getElementById("title-id");
let cardsEl = document.getElementById("cards-id");
let sumEl = document.getElementById("sum-id");
let playerEl = document.getElementById("player-id")

let player = {
    name: "VISH",
    chips: 100,
}

playerEl.innerHTML = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = (Math.floor(Math.random() * 13) + 1)
    if (randomCard > 10) {
        randomCard = 10;
        return randomCard;
    } else if (randomCard === 1) {
        randomCard = 11;
        return randomCard;
    } else {
        return randomCard;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    if (inGame === false) {
        inGame = true;
        renderGame();
    }
}

function renderGame() {

    inGame = false;
    hasBlackjack = false;

    titleEl.style.visibility = "hidden";
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.innerText = "Sum: " + sum;

    if (sum < 21) {
        message = "Want to add an extra card?";
        inGame = true;
    } else if (sum === 21) {
        message = "That's a Blackjack!!! \n ♠ ";
        hasBlackjack = true;
        inGame = false;
    } else {
        message = "You are out of luck. Try again? ";
        inGame = false;

    }

    messageEl.innerText = message;

}

function newCard() {
    if (hasBlackjack === false && inGame === true) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}


function resetGame() {
    startGame();
}