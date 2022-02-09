import moxios from 'moxios'

import { getSecretWord, correctGuess, actionTypes } from './'

describe('correctGuess', () => {
    test('return function with a type "CORRECT_GUESS"', () => {
        const action = correctGuess()
        expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS })
    })
})

describe('getSecretWord', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('word is returned from func', async () => {
        await moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: 'party'
            }) 
        })

        return getSecretWord().then(secretWord => expect(secretWord).toBe('party'))
    })
})