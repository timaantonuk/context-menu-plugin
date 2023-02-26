import { Module } from '../core/module'
import { getRandomColor } from '../core/functions'

export class BackgroundModule extends Module {

	trigger() {
		// console.log('Смена цвета фона')
		const bgColor = document.body.style.background = getRandomColor()

		const title = document.createElement('h1')
		title.textContent = `Цвет фона изменен на ${bgColor}`
		title.className = 'title_H1'

		this.setTextColor(title, bgColor)

		const container = document.querySelector('.container')
		container.append(title)
		setTimeout(() => {
			title.remove()
			document.body.style.background = 'white'
		}, 2000)

	}

	setTextColor(text, color) {
		const luminance = chroma(color).luminance()
		text.style.color = luminance > 0.5 ? 'black' : 'white'
	}

}