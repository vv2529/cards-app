function downloadCards(callback) {
	fetch('../php/download.php').
		then(response => response.json()).
		then(cards => callback(cards));
}

function uploadCards({ name, dob, gender }, callback) {
	fetch(encodeURI(`../php/upload.php?name=${name}&dob=${dob}&gender=${gender}`)).
		then(response => response.json()).
		then(card => callback(card));
}

export { downloadCards, uploadCards };
