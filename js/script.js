const adviceNumber = document.querySelector('.advice__number span')
const adviceText = document.querySelector('.advice__text')
const btn = document.querySelector('.advice__dice')
const URL = 'https://api.adviceslip.com/advice'

const advice = async () => {
	try {
		const res = await fetch(URL)
		const data = await res.json()
		adviceNumber.textContent = `Advice #${data.slip.id}`
		adviceText.textContent = `"${data.slip.advice}"`
	} catch {
		adviceNumber.textContent = 'Oops! Something went wrong!'
		adviceText.textContent = 'Oops! Something went wrong!'
	}
}


btn.addEventListener('click', advice)
advice()


