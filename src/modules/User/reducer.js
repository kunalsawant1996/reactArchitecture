import { USER_ERROR, USER_REQUESTING, USER_SUCCESS  } from "../../constants";

// The initial state of the USER Reducer
export const initialState = {
    user: [],
    requesting: false,
    successful: false,
    errors: {},
};

const usereducer = (state = initialState, actions) => {
    switch (actions.type) {
        case USER_REQUESTING:
            return { ...state, requesting: true };
        case USER_SUCCESS:
            return {...state ,successful: true, user: actions.payload} ;
        case USER_ERROR:
            return { ...state, successful: false, errors: { ...actions.error } };
        default:
            return state;
    }
}

export default usereducer;