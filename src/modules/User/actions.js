import { USER_ERROR, USER_REQUESTING, USER_SUCCESS  } from "../../constants";
export function userRequest() {
    return {
        type: USER_REQUESTING,
    };
}

export function userError(error) {
    return {
        type: USER_ERROR,
        error,
    };
}

export function userSuccess(payload) {
    return {
        type: USER_SUCCESS,
        payload
    };
}