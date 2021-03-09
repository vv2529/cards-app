function downloadCards(callback) {
	fetch('php/download.php').
		then(response => response.json()).
		then(cards => callback(cards)).
		catch(() => {
			fetch('json/example.json').
			then(response => response.json()).
			then(cards => callback(cards));
		});
}

function uploadCards({ name, dob, gender }, callback) {
	fetch(encodeURI(`php/upload.php?name=${name}&dob=${dob}&gender=${gender}`)).
		then(response => response.json()).
		then(card => callback(card));
}

function deleteCard(id) {
	fetch(`php/delete.php?id=${id}`);
}

export { downloadCards, uploadCards, deleteCard };
