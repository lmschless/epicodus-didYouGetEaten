import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameUI.js';
import $ from 'jquery';

export class HungryBear {
	constructor(name) {
		this.name = name;
		this.foodLevel = 100;
		this.sleepLevel = 100;
		this.difficultyLevel;
	}

	setHunger() {
		setInterval(() => {
			this.foodLevel--;
			currentHunger = (this.foodLevel);
			console.log(this.foodLevel);
		}, 1000);
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
