import $ from 'jquery';
import { HungryBear } from './hungrybear.js';
$(document).ready(function() {

	$('#game-setup').submit(function(e) {
		const currentHunger = $('#current-hunger').val();
		const newBear = new HungryBear($('#name').val(), 'normal');
		newBear.playGame();
		console.log(newBear);
		e.preventDefault();
	});
});

