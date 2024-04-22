// Global
let items = [
	"rock",
	"paper",
	"scissors"
];
let score = {
	user: 0,
	bot: 0
};

// Computer Choice
function getBotChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	let botChoice = items[randomChoice];
	return botChoice;
}
// User Choice
function getUserChoice() {
	let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
	while (!(items.includes(userChoice))) {
		alert("Invalid Input!");
		userChoice = prompt("Try Again! Rock, Paper or Scissors?").toLowerCase();
		
	}
	return userChoice;
}

// Compare
function playRound(userChoice, botChoice) {
	if (userChoice == botChoice) {
			alert("Round Draw")
	}	else if (userChoice == "scissors") {
			if (botChoice == "paper") {
					alert("SCISSORS beats PAPER! You Win this Round.");
					score.user += 1;
			}	else if (botChoice == "rock") {
					alert("ROCK beats SCISSORS! You Lose this Round.");
  				score.bot += 1;
			}
	}	else if (userChoice == "rock") {
			if (botChoice == "scissors") {
					alert("ROCK beats SCISSORS! You Win this Round.");
					score.user += 1;
			}	else if (botChoice == "paper") {
					alert("PAPER beats ROCK! You Lose this Round.");
					score.bot += 1;
			}
	}	else if (userChoice == "paper") {
			if (botChoice == "rock") {
					alert("PAPER beats ROCK! You Win this Round.");
					score.user += 1;
			}	else if (botChoice == "scissors") {
					alert("SCISSORS beats PAPER! You Lose this Round.");
					score.bot += 1;
			}
	}	

}

// Main
function playGame(n) {
	for (let i=0; i<n; i++) {
		let userChoice = getUserChoice();
		let botChoice = getBotChoice();
		playRound(userChoice, botChoice);
		alert(`You: ${score.user}\nBot: ${score.bot}`)
	}
	
	
	if (score.user == score.bot) {
			alert("Game DRAW");
	}	else if (score.user > score.bot){
			alert("You WIN");
	} else {
			alert("You LOSE")
	}
}

// Play Game
playGame(5);