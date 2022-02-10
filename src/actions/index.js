import axios from 'axios'

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
}

export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS })

export const getSecretWord = () => {
    return axios.get('http://localhost:3030').then(res => res.data)
}

export const guessWord = (guessedWord) => (dispatch, getState) => {}