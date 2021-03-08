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
