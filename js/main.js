import { addCard } from './renderer.js';
import { downloadCards, uploadCards, deleteCard } from './loading.js';

/*
 * Event listeners
 */

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const container = document.getElementById('card-container');
const form = document.getElementById('form-wrapper');

let containerScrollTop = 0;

function updateScrollButtons() {
	btnLeft.disabled = (container.scrollTop === 0);
	btnRight.disabled = (container.scrollTop === container.scrollHeight - container.offsetHeight);
}

function deleteAndUpdateCard(id) {
	deleteCard(id);
	updateScrollButtons();
}

document.getElementById('btn-left').addEventListener('click', e => {
	container.scrollTop = containerScrollTop = Math.max(container.scrollTop - container.offsetHeight, 0);
	updateScrollButtons();
});

document.getElementById('btn-right').addEventListener('click', e => {
	container.scrollTop = containerScrollTop =
		Math.min(container.scrollTop + container.offsetHeight, container.scrollHeight - container.offsetHeight);
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
	container.scrollTop = containerScrollTop = container.scrollHeight - container.offsetHeight;
	document.getElementById('new-name').focus();
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

container.addEventListener('scroll', e => {
	console.log(container.scrollTop);
	container.scrollTop = containerScrollTop;
});

form.addEventListener('submit', e => {
	e.preventDefault();
	uploadCards({
		name: document.getElementById('new-name').value,
		dob: document.getElementById('new-dob').value,
		gender: document.getElementById('new-gender').value,
	}, card => {
		document.getElementById('new-name').value = '';
		document.getElementById('new-dob').value = '';
		document.getElementById('new-gender').selectedIndex = 0;
		addCard(card, document.getElementById('form-wrapper'), deleteAndUpdateCard, updateScrollButtons);
	});
});

/*
 * Loading cards
 */

downloadCards(cards => {
	document.getElementById('loading-indicator').remove();
	cards.forEach(card => addCard(card, document.getElementById('form-wrapper'), deleteAndUpdateCard));
	updateScrollButtons();
});
