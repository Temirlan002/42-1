import axios from 'axios';
import { types } from './types'

export const fetchCharacters = (page = 1) => async (dispatch) => {
    dispatch({ type: types.FETCH_CHARACTERS_REQUEST });
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        dispatch({ type: types.FETCH_CHARACTERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({type: types.FETCH_CHARACTERS_FAILURE, error: error.message})
    }
}

export const addUserAction = (user) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
}

export const fetchCatSuccess = (catImage) => ({
    type: types.FETCH_CAT_SUCCESS,
    payload: catImage
})

export const fetchCat = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        dispatch(fetchCatSuccess(response.data[0].url));
    } catch (error) {
        console.error('Failed to fetch cat: ', error)
    }
}

export const fetchJokeSuccess = (joke) => ({
    type: types.FETCH_JOKE_SUCCESS,
    payload: joke
})

export const fetchJoke = () => async (dispatch) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = `${response.data.setup} - ${response.data.punchline}`;
        dispatch(fetchJokeSuccess(joke))
    } catch (error) {
        console.error('Failed to fetch joke:', error);
        
    }
}