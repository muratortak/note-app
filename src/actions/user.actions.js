import  * as userConstants  from '../constants/action-types';
import * as userService from '../services/user.service';
import { history } from '../helpers/history';

const userLogin = () => {
    return {
        type: userConstants.USER_LOGIN
    }
}

const userLoginSuccess = (user) => {
    console.log("USER IN FUNC: ", user);
    return {
        type: userConstants.USER_LOGIN_SUCCESS,
        payload: user
    }
}

const userLoginFailure = () => {
    return {
        type: userConstants.USER_LOGIN_FAILURE
        }
}


const userLogout = () => {
    return {
        type: userConstants.USER_LOGOUT
    }
}

const userLogoutSuccess = () => {
    console.log("USER IN FUNC: ");
    return {
        type: userConstants.USER_LOGOUT_SUCCESS,
        payload: {}
    }
}

const userLogoutFailure = () => {
    return {
        type: userConstants.USER_LOGOUT_FAILURE
        }
}

export function loginFunc({userName, password}) {
    return async dispatch => {
        dispatch(userLogin());
        
        try {
            let usr = await userService.login({userName, password})
            console.log("try-catch user: ", usr);
            dispatch(userLoginSuccess(usr));
            history.push('/main');
        } catch(err) {
            console.log("ERROR IN LOGIN FUN: ", err);
        }
        // FIXME: Might be converted to async/await
            // .then(user => {
            //     console.log("USER: ", user);
            //     dispatch(userLoginSuccess(user));
            //     history.push('/main');
            // })
            // .catch(err => {
            //     dispatch(userLoginFailure());
            // })
    }
}


// TODO: Logout

export function logout() {
    return async dispatch => {
        dispatch(userLogout());

        try {
            let res = await userService.logout();
            console.log("USER LOGOUT ", res);
            dispatch(userLogoutSuccess());
            history.push('/');
        }
        catch(err) {
            console.log(err);
        }
    }
}

// TODO: Register
