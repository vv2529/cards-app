import { addCardFromJSON } from './renderer.js';

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const container = document.getElementById('card-container');

function updateScrollButtons() {
	btnLeft.disabled = (container.scrollTop === 0);
	btnRight.disabled = (container.scrollTop === container.scrollTopMax);
}

document.getElementById('btn-left').addEventListener('click', e => {
	container.scrollTop = Math.max(container.scrollTop - container.offsetHeight, 0);
	updateScrollButtons();
});

document.getElementById('btn-right').addEventListener('click', e => {
	container.scrollTop = Math.min(container.scrollTop + container.offsetHeight, container.scrollTopMax);
	updateScrollButtons();
});

document.body.addEventListener('click', e => {
	const inputs = document.getElementsByClassName('options-checkbox');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].checked = false;
	}
});

document.getElementById('btn-add').addEventListener('click', e => {
	document.getElementById('form-wrapper').classList.remove('hidden');
	updateScrollButtons();
});

document.getElementById('btn-close').addEventListener('click', e => {
	const elem = e.target;
	elem.parentElement.parentElement.classList.add('hidden');
	updateScrollButtons();
});

document.getElementById('btn-close').addEventListener('keypress', e => {
	if (e.keyCode == 13) {
		document.getElementById('btn-close').click();
	}
});

window.addEventListener('resize', updateScrollButtons);

addCardFromJSON(JSON.stringify({
	id: 0,
	name: 'John Smith',
	age: 30,
	registrationTime: 1615231721,
	gender: 'male',
}), document.getElementById('form-wrapper'), updateScrollButtons);

addCardFromJSON(JSON.stringify({
	id: 1,
	name: 'Benetha Green',
	age: 45,
	registrationTime: 1615231731,
	gender: 'female',
}), document.getElementById('form-wrapper'), updateScrollButtons);

addCardFromJSON(JSON.stringify({
	id: 2,
	name: 'Monica Heins',
	age: 25,
	registrationTime: 1615231741,
	gender: 'female',
}), document.getElementById('form-wrapper'), updateScrollButtons);

addCardFromJSON(JSON.stringify({
	id: 3,
	name: 'Edward Crew',
	age: 35,
	registrationTime: 1615231751,
	gender: 'male',
}), document.getElementById('form-wrapper'), updateScrollButtons);
