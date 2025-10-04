import axios from 'axios';
const API_KEY='77177e0';
const BASE_URL='https://www.omdbapi.com/';
export async function getmovie(search) {
    const response = await axios.get(`${BASE_URL}?s=${search}&apikey=${API_KEY}`)
    return response.data.Search || []
}