import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameUI.js';
import $ from 'jquery';

export class HungryBear {
	constructor(name, difficultyLevel, hardcore='no') {
		this.name = name;
		this.foodLevel = 100;
		this.sleepLevel = 100;
		this.difficultyLevel = difficultyLevel;
		this.hardcore = hardcore;
	}

	setHunger() {
		if(this.hardcore){
				let hInterval =  setInterval(() => {
				if(this.foodLevel == 0){
					clearInterval(hInterval);
				}
				$('#current-hunger').val(this.foodLevel);
				this.currentHunger = this.foodLevel;
				this.foodLevel--;
			}, 50); 
		}
		else if(this.difficultyLevel == 'easy'){
				let eInterval = setInterval(() => {
				if(this.foodLevel == 0){
					clearInterval(eInterval);
				}
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
			this.foodLevel--;
		}, 1000);
	} else if(this.difficultyLevel == 'normal'){
			let nInterval = setInterval(() => {
			if(this.foodLevel == 0){
				clearInterval(nInterval);
			}
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
			this.foodLevel--;
		}, 400);
	} else {
			setInterval(() => {
			$('#current-hunger').val(this.foodLevel);
			this.currentHunger = this.foodLevel;
			this.foodLevel--;
		}, 100);
	}
	}

	feed() {
		this.foodLevel += 10;
	}

	setSleep() {
		setInterval(() => {
			while(this.sleepLevel >= 0){
				this.sleepLevel--;
			}
		}, 5000);
	}

	playGame(){
		this.setHunger();
	}
}
