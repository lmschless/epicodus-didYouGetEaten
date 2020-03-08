import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class HungryBear {
	constructor(name) {
		this.name = name;
		this.foodLevel = 100;
		this.sleepLevel = 100;
	}

	setHunger() {
		setInterval(() => {
			this.foodLevel--;
		}, 1000);
	}

	setSleep() {
		setInterval(() => {
			this.sleepLevel--;
		}, 5000);
	}
}
