import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import Congrats from './Congrats'
import { findByTestAttr } from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => shallow(<Congrats {...props}/>)

test('renders without errors', async () => {
    const wrapper = setup()
    const component = await findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders empty text message when "success" is false', async () => {
    const wrapper = setup({success: false})
    const component = await findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
})

test('renders non empty text message when "success" is true', async () => {
    const wrapper = setup({success: true})
    const component = await findByTestAttr(wrapper, 'congrats-message')
    expect(component.text()).not.toBe('')
})
