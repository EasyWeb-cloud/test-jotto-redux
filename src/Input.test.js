import { shallow } from "enzyme";
import React from 'react'

import Input from './Input'
import { findByTestAttr } from '../test/testUtils'

const setup = (success=false, secretWord='party') => 
    shallow(<Input success={success} secretWord={secretWord}/>)

describe('render', () => {
    describe('success is true', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup(true)
        })
        test('renders without errors', async () => {
            const component = await findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('input box isnt shown', async () => {
            const inputBox = await findByTestAttr(wrapper, 'input-box')
            expect(inputBox.exists()).toBe(false)
        })

        test('submit button isnt shown', async () => {
            const submitButton = await findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.exists()).toBe(false)
        })
    })

    describe('success is false', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup(false)
        })
        test('renders without errors', async () => {
            const component = await findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('input box be shown', async () => {
            const inputBox = await findByTestAttr(wrapper, 'input-box')
            expect(inputBox.exists()).toBe(true)
        })

        test('submit button be shown', async () => {
            const submitButton = await findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.exists()).toBe(true)
        })
    })
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