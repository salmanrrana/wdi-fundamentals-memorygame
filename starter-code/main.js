var cards = 'queen' , 'queen' , 'king' , 'king';
var cardsInPlay = '';

var board = document.getElementById('game-board');
// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {
    // create a div element which will be used as a card
    var cardElement = document.createElement('div');
    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

    // append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
//checks to see if there are cards in play
function isTwoCards() {
  // add card to array of cards being viewed
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the cardElement you click on
  cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/10/26/01/20/queen-63006_1280.jpg'>"; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();