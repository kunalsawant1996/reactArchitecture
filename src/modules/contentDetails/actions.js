import { CONTENT_PAGE_DETAILS_ERROR, CONTENT_PAGE_DETAILS_REQUESTING, CONTENT_PAGE_DETAILS_SUCCESS } from "../../constants";
export function contentDetailsSRequest(payload) {
    return {
        type: CONTENT_PAGE_DETAILS_REQUESTING,
        payload
    };
}

export function contentDetailsSError(error) {
    return {
        type: CONTENT_PAGE_DETAILS_ERROR,
        error,
    };
}

export function contentDetailsSSuccess() {
    return {
        type: CONTENT_PAGE_DETAILS_SUCCESS,
    };
}