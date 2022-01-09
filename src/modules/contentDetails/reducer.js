import { CONTENT_PAGE_DETAILS_ERROR, CONTENT_PAGE_DETAILS_REQUESTING, CONTENT_PAGE_DETAILS_SUCCESS } from "../../constants";

// The initial state of the contentDetails Reducer
export const initialState = {
    data: [],
    messages: [],
    errors: {},
};

export default function(state = initialState, actions) {
    switch (actions.type) {
        case CONTENT_PAGE_DETAILS_REQUESTING:
            return {...state, requesting: true };
        case CONTENT_PAGE_DETAILS_SUCCESS:
            return {...state, successful: true, data: {...actions.payload } };
        case CONTENT_PAGE_DETAILS_ERROR:
            return {...state, successful: false, errors: {...actions.error } };
        default:
            return state;
    }
}