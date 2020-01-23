const goals = document.querySelectorAll('.goal');
const goal1 = document.querySelector('#goal1');
const goal2 = document.querySelector('#goal2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const resetBtn = document.querySelector('#reset');
const winState = document.querySelector('#winState');
const winnerField = document.querySelector('#winner');
const hpMax = 10;

var player1hp = hpMax,
	player2hp = hpMax;


function incrementScore(event) {
	event.preventDefault();

	var goalClicked = event.target.id;

	goalClicked == 'goal1' ? player1hp-- : player2hp--;

	score1.innerHTML = player1hp;
	score2.innerHTML = player2hp;

	if (player1hp == 0 || player2hp == 0) {

		for (var i=0, ii=goals.length; i<ii; i++) {
			goals[i].classList.add('hidden');
		}

		winner.innerHTML = player1hp > player2hp ? 'magical girl wins' : 'skull wins';
		winState.classList.remove('hidden');
	}
}

function reset(event) {
	event.preventDefault();

	for (var i=0, ii=goals.length; i<ii; i++) {
		console.log(goals);
		goals[i].classList.remove('hidden');
	}

	winner.innerHTML = '';
	winState.classList.add('hidden');

	player1hp = hpMax;
	score1.innerHTML = player1hp;

	player2hp = hpMax;
	score2.innerHTML = player2hp;
}

resetBtn.addEventListener('mouseup', reset);
goal1.addEventListener('mouseup', incrementScore);
goal2.addEventListener('mouseup', incrementScore);