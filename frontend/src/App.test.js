import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from './App'
import { findByTestAttr, storeFactory } from "../test/testUtils";

jest.mock('./actions')
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions'

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    return mount(<Provider store={store}><App /></Provider>)
}

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
        // eslint-disable-next-line no-unused-vars
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