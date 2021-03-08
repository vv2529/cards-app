import './event-listeners.js';
import { addCardFromJSON } from './renderer.js';

addCardFromJSON(JSON.stringify({
	id: 0,
	name: 'John Smith',
	age: 30,
	registrationTime: 1615231721000,
	gender: 'male',
}), document.getElementById('form-wrapper'));

addCardFromJSON(JSON.stringify({
	id: 1,
	name: 'Benetha Green',
	age: 45,
	registrationTime: 1615231731000,
	gender: 'female',
}), document.getElementById('form-wrapper'));

addCardFromJSON(JSON.stringify({
	id: 2,
	name: 'Monica Heins',
	age: 25,
	registrationTime: 1615231741000,
	gender: 'female',
}), document.getElementById('form-wrapper'));

addCardFromJSON(JSON.stringify({
	id: 3,
	name: 'Edward Crew',
	age: 35,
	registrationTime: 1615231751000,
	gender: 'male',
}), document.getElementById('form-wrapper'));
