import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameUI.js';
import $ from 'jquery';

export class HungryBear {
	constructor(name, difficultyLevel, hardcore = 'no') {
		this.name = name;
		this.foodLevel = 100;
		this.sleepLevel = 100;
		this.difficultyLevel = difficultyLevel;
		this.hardcore = hardcore;
	}

	setHunger() {
		if (this.hardcore) {
			let hInterval = setInterval(() => {
				if (this.foodLevel == 0) {
					clearInterval(hInterval);
					this.gameOver();
				}
				$('#current-hunger').val(this.foodLevel);
				this.currentHunger = this.foodLevel;
				this.foodLevel--;
			}, 50);
		} else if (this.difficultyLevel == 'easy') {
			let eInterval = setInterval(() => {
				if (this.foodLevel == 0) {
					clearInterval(eInterval);
				}
				$('#current-hunger').val(this.foodLevel);
				this.currentHunger = this.foodLevel;
				this.foodLevel--;
			}, 1000);
		} else if (this.difficultyLevel == 'normal') {
			let nInterval = setInterval(() => {
				if (this.foodLevel == 0) {
					clearInterval(nInterval);
				}
				$('#current-hunger').val(this.foodLevel);
				this.currentHunger = this.foodLevel;
				this.foodLevel--;
			}, 400);
		} else {
			let hardInterval = setInterval(() => {
				if (this.foodLevel == 0) {
					clearInterval(hardInterval);
				}
				$('#current-hunger').val(this.foodLevel);
				this.currentHunger = this.foodLevel;
				this.foodLevel--;
			}, 100);
		}
	}

	feed() {
		if (this.hardcore) {
			this.foodLevel += 4;
		} else {
			this.foodLevel += 10;
		}
	}

	setSleep() {
		setInterval(() => {
			while (this.sleepLevel >= 0) {
				this.sleepLevel--;
			}
		}, 5000);
	}

	playGame() {
		this.setHunger();
	}

	gameOver() {
		console.log('you lose!');
		giphyApi();
	}
}

export const giphyApi = () => {
	const response = fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=3GEN0IiVzJVKldUDffJCxrkGBFK02tGL&q=angry bear&limit=25&offset=0&rating=G&lang=en`
	)
		.then(function(response) {
			if (response.ok && response.status == 200) {
				return response.json();
			} else {
				return false;
			}
		})
		.then(function(jsonifiedResponse) {
			console.log(jsonifiedResponse.data[0]);
			// $('body').append(
			// 	// giphy's link to gif
			// 	`<iframe src="https://giphy.com/embed/xT5LMqN2WLN13JR8CA" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-15-the-simpsons-15x5-xT5LMqN2WLN13JR8CA">via GIPHY</a></p>>`
			// );
			$('body').append(
				// my api call to giphy, seems like I have to use an iframe for it to work.
				`<div id="history"><p><iframe src="${jsonifiedResponse.data[0]
					.embed_url}" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p></div>`
			);
		});
	console.log(response);
};
