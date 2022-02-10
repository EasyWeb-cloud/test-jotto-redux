import { createStore, applyMiddleware } from "redux"

import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

export const storeFactory = initialState => 
    createStore(rootReducer, initialState, applyMiddleware(...middlewares))