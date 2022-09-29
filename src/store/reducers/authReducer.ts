import { SET_AUTH_LOADING, SET_USER_DETAILS, LOGOUT_USER ,GET_USER_PROFILE} from "../types";

const initialState = {
    isLoading: false,
    userDetails: null,
    followers: 0,
    following: 0,
    treasures: 0
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
                userDetails: payload.userDetails,
                followers: payload.followers,
                following: payload.following,
                treasures: payload.treasures,
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