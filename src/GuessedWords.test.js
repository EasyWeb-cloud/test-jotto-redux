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
    test('renders withour errors', () => {

    })
})