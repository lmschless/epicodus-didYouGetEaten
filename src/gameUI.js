import $ from 'jquery';
import { HungryBear } from './hungrybear.js';
$(document).ready(function() {
let newBear;

	$('#game-setup').submit(function(e) {
		// const currentHunger = $('#current-hunger').val();
		newBear = new HungryBear($('#name').val(), 'normal');
		newBear.playGame();
		console.log(newBear);
		e.preventDefault();
	});

	$('#feed').click(function (e) { 
		e.preventDefault();
		newBear.feed();
	});
});

