import { actionTypes } from "../actionTypes";

const initialState = {
    classes: {
        id:0,
        course_name: '',
    }
}

export const classReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CLASS:
            return {
                ...state,
                classes: payload
            };
        default:
            return state;
    }
}

