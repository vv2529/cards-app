function loadCards(callback) {
	fetch('../php/download.php').
		then(response => response.json()).
		then(cards => callback(cards));
}

export { loadCards };
