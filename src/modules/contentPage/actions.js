import { CONTENT_PAGE_ERROR, CONTENT_PAGE_REQUESTING, CONTENT_PAGE_SUCCESS } from "../../constants";

export function contentPageRequest(payload) {
    return {
        type: CONTENT_PAGE_REQUESTING,
        payload
    };
}

export function contentPageError(error) {
    return {
        type: CONTENT_PAGE_ERROR,
        error,
    };
}

export function contentPageSuccess() {
    return {
        type: CONTENT_PAGE_SUCCESS,
    };
}