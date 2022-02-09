import { shallow } from "enzyme";

import App from './App'
import { findByTestAttr } from "../test/testUtils";

const setup = () => shallow(<App />)

test('renders without errors', async () => {
    const wrapper = setup()
    const component = await findByTestAttr(wrapper, 'component-app')
    expect(component).toHaveLength(1)
})