const goals = document.getElementsByClassName('goal');
const goal1 = document.getElementById('goal1');
const goal2 = document.getElementById('goal2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const resetBtn = document.getElementById('reset');
const winState = document.getElementById('winState');
const winnerField = document.getElementById('winner');
const music = document.getElementById('music');
const punch1 = document.getElementById('punch1');
const punch2 = document.getElementById('punch2');
const punch3 = document.getElementById('punch3');
const bells = document.getElementById('bells');
const hpMax = 10;

var player1hp = hpMax,
	player2hp = hpMax,
	hitCounter = 0;


function incrementScore(event) {
	event.preventDefault();

	var goalClicked = event.target.id;

	goalClicked == 'goal1' ? player1hp-- : player2hp--;

	score1.innerHTML = player1hp;
	score2.innerHTML = player2hp;

	switch(hitCounter) {
		case 0:
			punch1.play();
			break;
		case 1:
			punch2.play();
			break;
		case 2:
			punch3.play();
			hitCounter = -1;
			break;
	}

	hitCounter++;

	if (player1hp == 0 || player2hp == 0) {
		music.pause();
		bells.play();

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
		goals[i].classList.remove('hidden');
	}

	winner.innerHTML = '';
	winState.classList.add('hidden');

	player1hp = hpMax;
	score1.innerHTML = player1hp;

	player2hp = hpMax;
	score2.innerHTML = player2hp;

	music.currentTime = 0;
	music.play();
}

resetBtn.addEventListener('mouseup', reset);
goal1.addEventListener('mouseup', incrementScore);
goal2.addEventListener('mouseup', incrementScore);