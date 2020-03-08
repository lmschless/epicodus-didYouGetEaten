import $ from 'jquery';
import { HungryBear } from './hungrybear.js';

$(document).ready(function() {
	$('#game-setup').click(function(e) {
		const newBear = new HungryBear($('#name').val(), 'normal');

		console.log(newBear);
		e.preventDefault();
	});
});
