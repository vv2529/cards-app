function addCard(cardObject, insertBefore, callback = () => {}) {
	const { id } = cardObject;
	const HTMLText = parseJSONtoHTML(cardObject);
	insertBefore.insertAdjacentHTML('beforebegin', HTMLText);

	document.getElementById(`card-wrapper-${id}`).addEventListener('keypress', e => {
		const elem = e.target;
		if (e.keyCode == 13) {
			if (elem.classList.contains('option')) {
				elem.click();
			} else {
				document.getElementById(`btn-options-${id}`).click();
			}
		}
	});

	document.getElementById(`card-wrapper-${id}`).addEventListener('click', e => {
		e.stopPropagation();
		const elem = e.target;
		if (elem.classList.contains('option-delete')) {
			elem.parentElement.parentElement.parentElement.remove();
			callback();
		}
	});

	document.getElementById(`option-delete-${id}`).addEventListener('blur', e => {
		document.body.click();
	});

	callback();
}

function parseJSONtoHTML(data) {
	return `<div class="card-wrapper" id="card-wrapper-${data.id}">
	<figure class="card" tabindex="1">
		<img src="assets/avatar-${data.gender == 'male' ? 'm' : 'f'}.jpg" alt="${data.name}" class="card-img">
		<figcaption class="card-desc">
			<table class="card-table">
				<tr class="card-table-row">
					<th class="card-table-name">Name:</th>
					<td class="card-table-value">${data.name}</td>
				</tr>
				<tr class="card-table-row">
					<th class="card-table-name">Age:</th>
					<td class="card-table-value">${data.age}</td>
				</tr>
				<tr class="card-table-row">
					<th class="card-table-name">Registered:</th>
					<td class="card-table-value">${timeToString(data.registrationTime)}</td>
				</tr>
			</table>
		</figcaption>
	</figure>
	<div class="options-container">
		<label class="options-label" for="options-checkbox-${data.id}">
			<div class="btn btn-options" id="btn-options-${data.id}" tabindex="1">···</div>
		</label>
		<input type="checkbox" class="options-checkbox" id="options-checkbox-${data.id}">
		<div class="options">
			<button class="btn option option-delete" id="option-delete-${data.id}" tabindex="1">Delete</button>
		</div>
	</div>
</div>`;
}

function timeToString(timestamp) {
	const date = new Date(+timestamp);
	const dateString = date.toString();
	return dateString.slice(4, dateString.indexOf('GMT') - 4);
}

export { addCard };
