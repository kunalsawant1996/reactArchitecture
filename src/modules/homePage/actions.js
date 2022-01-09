import { HOME_ERROR, HOME_REQUESTING, HOME_SUCCESS } from "../../constants";


export function homeRequest(payload) {
    return {
        type: HOME_REQUESTING,
        payload
    };
}

export function homeError(error) {
    return {
        type: HOME_ERROR,
        error,
    };
}

export function homeSuccess() {
    return {
        type: HOME_SUCCESS,
    };
}