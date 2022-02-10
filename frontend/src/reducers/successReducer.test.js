import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test('when previous state is undefined return false', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})

test('return prev state when unknown action type', () => {
    const newState = successReducer(false, { type: 'unknown' })
    expect(newState).toBe(false)
})

test('return true if correct action type', () => {
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
})