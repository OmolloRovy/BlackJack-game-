// Player information
const player = {
    name: "Vanistelrooy",
    chips: 0
};

// Game state variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// DOM elements
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");

// Display player info
playerEl.textContent = `${player.name}: $${player.chips}`;

// Generate a random card value (1–13, face cards count as 10, Ace as 11)
function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) return 10; // Jack, Queen, King
    else if (randomNumber === 1) return 11; // Ace
    else return randomNumber;
}

// Start the game
function startGame() {
    isAlive = true;
    hasBlackJack = false;
    const firstCard = getRandomCard();
    const secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// Update the game interface
function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You’ve got Blackjack!";
        hasBlackJack = true;
        player.chips += 50; // reward for winning
        playerEl.textContent = `${player.name}: $${player.chips}`;
    } else {
        message = "You’re out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

// Draw a new card if game is still active
function newCard() {
    if (isAlive && !hasBlackJack) {
        const newCardValue = getRandomCard();
        cards.push(newCardValue);
        sum += newCardValue;
        renderGame();
    }
}
