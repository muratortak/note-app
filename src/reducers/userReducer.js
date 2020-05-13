import * as actions from '../constants/action-types';

const initialState = {
    user: {},
    loading: false,
    hasError: false
}


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case actions.USER_LOGIN:
            return {...state, loading: true}
        case actions.USER_LOGIN_SUCCESS:
            return {user: action.payload, loading: false, hasError: false}
        case actions.USER_LOGIN_FAILURE:
            return {...state, loading: false, hasError: true}
        case actions.USER_LOGOUT:
            return {...state, loading: true}
        case actions.USER_LOGOUT_SUCCESS:
            return {user: action.payload, loading: false, hasError: false}
        case actions.USER_LOGOUT_FAILURE:
            return {...state, loading: false, hasError: true}
            default:
            return state;
    }
}

