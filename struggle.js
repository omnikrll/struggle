var player1score = 0,
	player2score = 0,
	hiScore = 0,
	gamePoint = 7,
	goals = document.querySelectorAll('.goal'),
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

	if (hiScore == gamePoint) {

		for (var i=0, ii=goals.length; i<ii; i++) {
			goals[i].classList.add('hidden');
		}

		winner.innerHTML = player1score > player2score ? 'magical girl wins' : 'skull wins';
		winState.classList.remove('hidden');
	}
}

function reset(event) {
	console.log(event);
	event.preventDefault();

	for (var i=0, ii=goals.length; i<ii; i++) {
		console.log(goals);
		goals[i].classList.remove('hidden');
	}

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