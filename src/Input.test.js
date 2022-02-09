import { shallow } from "enzyme";
import React from 'react'

import Input from './Input'
import { findByTestAttr } from '../test/testUtils'

const setup = (secretWord='party') => shallow(<Input secretWord={secretWord}/>)

test('renders without errors', async () => {
    const wrapper = setup()
    const component = await findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
})

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn()
    let wrapper
    let originalUseState

    beforeEach(() => {
        mockSetCurrentGuess.mockClear()
        originalUseState = React.useState
        React.useState = jest.fn(() => ['', mockSetCurrentGuess])
        wrapper = setup()
    })

    afterEach(() => {
        React.useState = originalUseState
    })

    test('state updates with value of input box upon change', async () => {
        const inputBox = await findByTestAttr(wrapper, 'input-box')

        const mockEvent = {target: { value: 'train' }}
        inputBox.simulate('change', mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('state is cleared with upon submit button click', async () => {
        const submitButton = await findByTestAttr(wrapper, 'submit-button')

        submitButton.simulate('click', { preventDefault(){} })

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
})