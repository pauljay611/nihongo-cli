import axios from 'axios'

// Set config defaults when creating the instance
const api = axios.create({
	baseURL: 'https://jisho.org/api/v1/search'
})

export const jpltApi = (level, page) => {
	return api
		.get(`words?keyword=%23jlpt-${level}&page=${page}`)
		.then(data => {
			return data.data
		})
		.catch(err => {
			console.log(err)
		})
}
