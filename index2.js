// Define the deck of cards
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Create the deck
function createDeck() {
    let deck = [];
    for (let suit of cardSuits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    return deck;
}

// Get the numerical value of a card rank
function cardValue(card) {
    const { rank } = card;
    if (rank === 'A') return 14;
    if (rank === 'K') return 13;
    if (rank === 'Q') return 12;
    if (rank === 'J') return 11;
    return parseInt(rank, 10);
}

// Shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Deal cards to players
function dealCards(deck) {
    return {
        player1: deck.slice(0, 26),
        player2: deck.slice(26, 52)
    };
}

// Play the game and determine the winner
function playGame(player1Cards, player2Cards) {
    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < player1Cards.length; i++) {
        const card1 = player1Cards[i];
        const card2 = player2Cards[i];

        const value1 = cardValue(card1);
        const value2 = cardValue(card2);

        if (value1 > value2) {
            player1Score++;
        } else if (value2 > value1) {
            player2Score++;
        }
        // If equal, no points are awarded
    }

    return { player1Score, player2Score };
}

// Main function to run the game
function main() {
    const deck = createDeck();
    shuffleDeck(deck);

    const { player1, player2 } = dealCards(deck);
    const { player1Score, player2Score } = playGame(player1, player2);

    console.log(`Player 1 Score: ${player1Score}`);
    console.log(`Player 2 Score: ${player2Score}`);

    if (player1Score > player2Score) {
        console.log('Player 1 wins!');
    } else if (player2Score > player1Score) {
        console.log('Player 2 wins!');
    } else {
        console.log('It\'s a tie!');
    }
}

// Execute the main function
main();
