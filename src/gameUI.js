import $ from 'jquery';
import { HungryBear } from './hungrybear.js';
$(document).ready(function() {

	$('#game-setup').submit(function(e) {
		const newBear = new HungryBear($('#name').val(), 'normal');
		newBear.playGame();
	const 	currentHunger = $('#current-hunger').val();
		console.log(newBear);
		e.preventDefault();
	});
});

