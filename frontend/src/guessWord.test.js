import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import App from './App'
import { findByTestAttr, storeFactory } from '../test/testUtils'

jest.mock('./actions')

const setup = async (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = mount(<Provider store={store}><App /></Provider>)

    const inputBox = await findByTestAttr(wrapper, 'input-box')
    inputBox.simulate('change', { target: { value: 'train' } })

    const submitButton = await findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault(){} })

    return wrapper
}

describe('no words guessed', () => {
    let wrapper
    beforeEach(async () => {
        wrapper = await setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        })
    })

    test('creates GuessedWords table with one row', async () => {
        const guessedWordsRows = await findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsRows).toHaveLength(1)
    })
})

describe('some words guessed', () => {
    let wrapper
    beforeEach(async () => {
        wrapper = await setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        })
    })

    test('adds to row GuessedWords', async () => {
        const guessedWordsRows = await findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsRows).toHaveLength(2)
    })
})

describe('guess secret word', () => {
    let wrapper
    beforeEach(async () => {
        wrapper = await setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        })

        const inputBox = await findByTestAttr(wrapper, 'input-box')
        const mockEvent = { target: { value: 'party' } }
        inputBox.simulate('change', mockEvent)

        const submitButton = await findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click', { preventDefault(){} })
    })

    test('add new row to the table', async () => {
        const guessedWordNodes = await findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes).toHaveLength(3)
    })
    test('displays congrats component', async () => {
        const congrats = await findByTestAttr(wrapper, 'component-congrats')
        expect(congrats.text().length).toBeGreaterThan(0)
    })

    test('does not display input component', async () => {
        const inputBox = await findByTestAttr(wrapper, 'input-box')
        expect(inputBox.exists()).toBe(false)

        const submitButton = await findByTestAttr(wrapper, 'submit-button')
        expect(submitButton.exists()).toBe(false)   
    })
})