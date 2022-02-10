import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import GuessedWords from './GuessedWords' 

const defaultProps = {
    guessedWords: [
        {guessedWords: 'train', letterMatchCount: 3}
    ]
}

const setup = (props) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

describe('if there is no words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })
    test('renders without errors', async () => {
        const component = await findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instruction to guess a word', async () => {
        const instruction = await findByTestAttr(wrapper, 'guess-instructions')
        expect(instruction.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    let wrapper
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5}
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })
    test('renders withour errors', async () => {
        const component = await findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders "guessed words" section', async () => {
        const guessWordsNode = await findByTestAttr(wrapper, 'guessed-words')
        expect(guessWordsNode.length).toBe(1)
    })

    test('correct numbers of guessed words', async () => {
        const guessWordNode = await findByTestAttr(wrapper, 'guessed-word')
        expect(guessWordNode.length).toBe(guessedWords.length)
    })
})