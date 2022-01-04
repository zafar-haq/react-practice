import { actionTypes } from "../actionTypes"
import axios from "axios"
import axiosService from '../../services/axiosService'
// export const setClass = (value) => {
//     return {
//         type: actionTypes.SET_CLASS,
//         payload: value

//     }
// }

export const setClass = () => async (dispatch) => {
    const response = await axiosService.send('instructor/getClass', '', '', 'get');
    dispatch({
        type: actionTypes.SET_CLASS,
        payload: response.data.data
    })
}

export const removeClass = value => {
    return {
        type: actionTypes.REMOVE_CLASS,
        payload: value
    }
}