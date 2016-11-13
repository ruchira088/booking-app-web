import {LOGIN_USER} from "./actionTypes"

export const loginUser = value => dispatch => {
    dispatch({
        type: LOGIN_USER,
        value
    })
}