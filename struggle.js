var player1score = 0,
	player2score = 0,
	hiScore = 0,
	goal1_container = document.querySelector('#goal1_container'),
	goal2_container = document.querySelector('#goal2_container'),
	goal1 = document.querySelector('#goal1'),
	goal2 = document.querySelector('#goal2'),
	score1 = document.querySelector('#score1'),
	score2 = document.querySelector('#score2'),
	resetBtn = document.querySelector('#reset'),
	winState = document.querySelector('#winState'),
	winnerField = document.querySelector('#winner');

function incrementScore(event) {
	event.preventDefault();

	var goalClicked = event.target.id;

	goalClicked == 'goal1' ? player1score++ : player2score++;

	hiScore = player1score > player2score ? player1score : player2score;

	score1.innerHTML = player1score;
	score2.innerHTML = player2score;

	if (hiScore == 14) {
	
		goal1_container.classList.add('hidden');
		goal2_container.classList.add('hidden');

		winner.innerHTML = player1score > player2score ? 'player 1 wins' : 'player 2 wins';
		winState.classList.remove('hidden');
	}
}

function reset() {
	goal1_container.classList.remove('hidden');
	goal2_container.classList.remove('hidden');

	winner.innerHTML = '';
	winState.classList.add('hidden');

	player1score = 0;
	score1.innerHTML = player1score;

	player2score = 0;
	score2.innerHTML = player2score;

	hiScore = 0;
}

resetBtn.addEventListener('mouseup', reset);
goal1.addEventListener('mouseup', incrementScore);
goal2.addEventListener('mouseup', incrementScore);