import $ from 'jquery';
import { HungryBear } from './hungrybear.js';
$(document).ready(function() {
	let newBear;
	$('#game-setup').submit(function(e) {
		// const currentHunger = $('#current-hunger').val();
		newBear = new HungryBear(
			$('#name').val(),
			$('#difficulty-level').val().toLowerCase(),
			$('#hardcore-mode').is(':checked')
		);
		newBear.playGame();
		console.log(newBear);
		e.preventDefault();
		$('#game-setup')[0].reset();
		$('.hide').hide();
	});
	$('#feed').click(function(e) {
		e.preventDefault();
		newBear.feed();
	});
});
