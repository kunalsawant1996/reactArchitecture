import { put, all, call, takeLatest } from "redux-saga/effects";
import { HOME_REQUESTING } from "../../constants";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import {
    homeSuccess,
    homeError,
} from "./actions";

//home API call
function homeCall(payload) {
    return request('post', urls.home_URL, payload);
}

// home Worker
function* homeWorker({ payload }) {
    try {
        let response = yield call(homeCall, payload);
        response = response.data;
        yield put(homeSuccess());
        // yield call(browserRedirect, '/');
    } catch (err) {
        yield put(homeError(err.response.data));
    }
}

// home Watcher
export default function* homeSaga() {
    yield all([
        takeLatest(HOME_REQUESTING, homeWorker),
    ]);
}