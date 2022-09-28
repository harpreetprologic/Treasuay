import { SET_AUTH_LOADING, SET_USER_DETAILS, LOGOUT_USER } from "../types";

const initialState = {
    isLoading: false,
    userDetails: null
}

export default function(state=initialState, action: any) {
    const {type, payload} = action;


    switch(type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                isLoading: payload
            }

        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: payload,
                isLoading: false
            }

        case LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return state;
    }

}