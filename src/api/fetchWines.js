import axios from 'axios'


const URL = 'https://api.spoonacular.com/food/wine/pairing'
const API_KEY = '5bc777447af1431c92d0d8a3a11f6d96'

export const fetchWines = async (mealSelection) => {
	const { data } = await axios.get(URL, {
		params: {
			apiKey: API_KEY,
			food: mealSelection
		}
	})
	return data
}