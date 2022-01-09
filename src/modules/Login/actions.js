import { LOGIN_ERROR, LOGIN_REQUESTING, LOGIN_SUCCESS } from "../../constants";

export function loginRequest(payload) {
    return {
        type: LOGIN_REQUESTING,
        payload
    };
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error,
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
    };
}