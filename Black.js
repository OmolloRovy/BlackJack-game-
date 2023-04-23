let player = {
        name: "Vanistelrooy"
    }
    //an empty array is created
let cards = []

//sum is initialied with 0
let sum = 0
    //false because the game hasn't started
let hasBlackJack = false
    //false because the game hasn't started
let isALive = false
    //an empty message variable is declared
let message = " "
let messageEl = document.getElementById("message-el")[0];
let sumEl = document.getElementById("sum-el")[0];
let cardsEl = document.getElementById("cards-el")[0];
let playerEl = document.getElementById("player-el")[0];

/*it generates a random number
math.random()*13  gives a random number between 0.000-9.99
the +1 adds 1 hence its between 1.0000-9.9999
the math.floor() trancates leaving a whole number */

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 9) + 1
    return randomNumber
}
/*
firstcard and secondcard are initialized with randomCard() between 1 and 10
cards array holds 2 items
sum adds firstcard and secondcard
renderGame() shall be updating the sum of the cards that has been drawn as long as the game is alive
 */
function startGame() {
    isALive = true //because the game has began
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    //card confirmation to the gamer
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        //this line displays the random cards drawn
        cardsEl.textContent += cards[i] + " "
            //adds the 2 cards
        sumEl.textContent = "sum:" + sum

    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have BlackJack!"
        hasBlackJack = true
        playerEl.textContent = "Congratulations-" + player.name + ":$" + sum
    } else {
        message = "You are out of Game!"
        isALive = false
    }
    messageEl.textContent = message


}

function newCard() {
    if (isALive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card

    }
    renderGame()
}