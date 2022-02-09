import axios from 'axios'

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
}

export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS })

export const getSecretWord = () => {
    return axios.get('http://localhost:3030').then(res => res.data)
}