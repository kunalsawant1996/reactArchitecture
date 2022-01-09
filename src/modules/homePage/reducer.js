import { HOME_ERROR, HOME_REQUESTING, HOME_SUCCESS } from "../../constants";

// The initial state of the HOME Reducer
export const initialState = {
    data: [],
    messages: [],
    errors: {},
};

export default function(state = initialState, actions) {
    switch (actions.type) {
        case HOME_REQUESTING:
            return {...state, requesting: true };
        case HOME_SUCCESS:
            return {...state, successful: true, data: {...actions.payload } };
        case HOME_ERROR:
            return {...state, successful: false, errors: {...actions.error } };
        default:
            return state;
    }
}