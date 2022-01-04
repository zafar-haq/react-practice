import { actionTypes } from "../actionTypes"


export const setClass = (value) => {
    return {
        type: actionTypes.SET_CLASS,
        payload: value

    }
}


export const removeClass = value => {
    return {
        type: actionTypes.REMOVE_CLASS,
        payload: value
    }
}