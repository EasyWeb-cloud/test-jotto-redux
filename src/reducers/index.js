import { combineReducers } from 'redux'
import success from './successReducer'
import guessWordReducer from './guessedWordReducer'

export default combineReducers({
    success,
    guessWord: guessWordReducer
})