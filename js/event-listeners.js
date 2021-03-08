document.getElementsByClassName('card-wrapper')[0].addEventListener('keypress', e => {
	const elem = e.target;
	if (e.keyCode == 13) {
		if (elem.classList.contains('option')) {
			elem.click();
		} else {
			document.getElementsByClassName('btn-options')[0].click();
		}
	}
});

document.getElementsByClassName('card-wrapper')[0].addEventListener('click', e => {
	e.stopPropagation();
	const elem = e.target;
	if (elem.id == 'option-delete') {
		elem.parentElement.parentElement.parentElement.remove();
	}
});

document.body.addEventListener('click', e => {
	const inputs = document.getElementsByClassName('options-checkbox');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].checked = false;
	}
});

document.getElementById('btn-add').addEventListener('click', e => {
	document.getElementById('form-wrapper').classList.remove('hidden');
});

document.getElementById('btn-close').addEventListener('click', e => {
	const elem = e.target;
	elem.parentElement.parentElement.classList.add('hidden');
});

document.getElementById('btn-close').addEventListener('keypress', e => {
	if (e.keyCode == 13) {
		document.getElementById('btn-close').click();
	}
});

document.getElementsByClassName('option-delete')[0].addEventListener('blur', e => {
	document.getElementsByClassName('btn-options')[0].click();
});
