import { CONTENT_PAGE_ERROR, CONTENT_PAGE_REQUESTING, CONTENT_PAGE_SUCCESS } from "../../constants";


// The initial state of the contentPage Reducer
export const initialState = {
    data: [],
    messages: [],
    errors: {},
};

export default function(state = initialState, actions) {
    switch (actions.type) {
        case CONTENT_PAGE_REQUESTING:
            return {...state, requesting: true };
        case CONTENT_PAGE_SUCCESS:
            return {...state, successful: true, data: {...actions.payload } };
        case CONTENT_PAGE_ERROR:
            return {...state, successful: false, errors: {...actions.error } };
        default:
            return state;
    }
}