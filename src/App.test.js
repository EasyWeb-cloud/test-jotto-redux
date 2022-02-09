import { mount } from "enzyme";

import App from './App'
import { findByTestAttr } from "../test/testUtils";

jest.mock('./actions')
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions'

const setup = () => mount(<App />)

test('renders without errors', async () => {
    const wrapper = setup()
    const component = await findByTestAttr(wrapper, 'component-app')
    expect(component).toHaveLength(1)
})

describe('get secret word', () => {
    beforeEach(() => {
        mockGetSecretWord.mockClear()
    })
    test('getSecretWord on app mount', () => {
        const wrapper = setup()

        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })

    test('getSecretWord doesnt run on app updating', () => {
        const wrapper = setup()
        mockGetSecretWord.mockClear()

        wrapper.setProps()

        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
    })
})