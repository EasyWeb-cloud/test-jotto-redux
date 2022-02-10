import { combineReducers } from 'redux'
import success from './successReducer'
import guessWordReducer from './guessedWordReducer'
import secretWordReducer from './secretWordReducer'

export default combineReducers({
    success,
    guessedWords: guessWordReducer,
    secretWord: secretWordReducer
})