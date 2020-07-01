import axios from 'axios'
import { JlptLevel, JlptResponse } from '../types'

// Set config defaults when creating the instance
const api = axios.create({
    baseURL: 'https://jisho.org/api/v1/search'
})

export const jpltApi = (level: JlptLevel, page: number) => {
    return api.get<JlptResponse>(`words?keyword=%23jlpt-${level}&page=${page}`).then(data => {
        return data.data
    })
}
