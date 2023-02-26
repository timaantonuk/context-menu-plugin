import { Module } from '../core/module';

export class ShapeModule extends Module {
	createRandomFigureAndDeletePrevious() {
		const container = document.querySelector('.container');
		if (document.getElementById('figure')) {
			document.getElementById('figure').remove();
		}
		const figure = document.createElement('div');

		figure.setAttribute('id', `figure`);

		figure.style.backgroundColor = this.setRandomColor();
		this.setRandomSize(figure);
		figure.style.position = 'absolute';
		this.setRandomPosition(figure);

		container.append(figure);
	}

	setRandomPosition(element) {
		const top = Math.floor(Math.random() * 401) + 100;
		const left = Math.floor(Math.random() * 401) + 100;

		element.style.top = top + 'px';
		element.style.left = left + 'px';
	}

	setRandomColor() {
		{
			const letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
	}

	setRandomSize(element) {
		// Generate a random width between 100 and 500 pixels
		const width = Math.floor(Math.random() * 401) + 100;

		// Generate a random height between 100 and 500 pixels
		const height = Math.floor(Math.random() * 401) + 100;

		// Generate a rounded shape

		// Generate a random border radius between 0 and 50 pixels
		const borderRadius = Math.floor(Math.random() * 90);

		// Set the element's border radius using the generated value
		// Set the element's width and height using the generated values
		element.style.width = width + 'px';
		element.style.height = height + 'px';
		element.style.borderRadius = borderRadius + 'px';
	}

	trigger() {
		Module.prepareLayout();
		this.createRandomFigureAndDeletePrevious();
	}
}
