import { Module } from '../core/module';

export class ClicksModule extends Module {
	prepareLayout() {
		Module.prepareLayout();
	}
	renderTimer() {
		const container = document.getElementById('container');
		const clicksTimer = document.createElement('h1');
		clicksTimer.setAttribute('id', 'clicks-timer');
		clicksTimer.setAttribute('class', 'clicks-timer');
		const clicksAmount = document.createElement('h2');
		clicksAmount.setAttribute('id', 'clicks-amount');
		clicksAmount.setAttribute('class', 'clicks-amount');

		container.append(clicksTimer, clicksAmount);
	}

	removeTimerFromLayout() {
		if (document.getElementById('clicks-timer')) {
			document.getElementById('clicks-timer').remove();
			document.getElementById('clicks-amount').remove();
		}
	}

	renderFinalResult() {
		if (
			!document.getElementById('final-result') &&
			!document.getElementById('figure')
		) {
			const container = document.getElementById('container');
			const finalResult = document.createElement('h2');
			finalResult.setAttribute('id', 'final-result');
			finalResult.setAttribute('class', 'final-result');
			container.append(finalResult);
		}
	}

	removeFinalResult() {
		if (document.getElementById('final-result')) {
			document.getElementById('final-result').remove();
		}
	}

	timer() {
		window.clearInterval(countDown);
		this.removeTimerFromLayout();
		this.removeFinalResult();
		this.renderTimer();

		// clicks amount logic
		const clicksAmount = document.getElementById('clicks-amount');
		let clickCounter = 0;
		document.body.addEventListener('click', () => {
			clickCounter++;
			clicksAmount.textContent = `Clicks amount: ${clickCounter}`;
		});

		// timer logic`
		const clicksTimer = document.getElementById('clicks-timer');
		clicksTimer.style.display = 'flex';
		clicksTimer.innerHTML = '00:03';

		let clicksTimerCount = 3;

		const countDown = setInterval(() => {
			clicksTimerCount--;
			clicksTimer.innerHTML = `00:0${clicksTimerCount}`;
			if (clicksTimerCount <= 0) {
				clearInterval(countDown);
				this.removeTimerFromLayout();
				this.renderFinalResult();
				const resultClick = document.getElementById('final-result');
				if (resultClick) {
					resultClick.textContent = `YOUR RESULT IS ${clickCounter} CLICKS!`;
				}
			}
		}, 1000);
	}

	trigger() {
		Module.prepareLayout();
		this.timer();
	}
}
