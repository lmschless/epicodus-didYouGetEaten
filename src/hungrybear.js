import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameUI.js';
import $ from 'jquery';

export class HungryBear {
	constructor(name, difficultyLevel) {
		this.name = name;
		this.foodLevel = 100;
		this.sleepLevel = 100;
		this.difficultyLevel = difficultyLevel;
	}

	setHunger() {
		if(this.difficultyLevel == 'easy'){
			setInterval(() => {
			this.foodLevel--;
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
		}, 1000);
	} else if(this.difficultyLevel == 'normal'){
		setInterval(() => {
			this.foodLevel--;
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
		}, 400);
	} else {
			setInterval(() => {
			this.foodLevel--;
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
		}, 100);
	}
	}

	feed() {
		this.foodLevel += 10;
	}

	setSleep() {
		setInterval(() => {
			this.sleepLevel--;
		}, 5000);
	}

	playGame(){
		this.setHunger();
	}
}
