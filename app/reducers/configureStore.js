import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

export default (initialState = {}) =>
    createStore(state => state, initialState, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ))