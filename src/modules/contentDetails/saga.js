import { put, all, call, takeLatest } from "redux-saga/effects";
import { CONTENT_PAGE_DETAILS_REQUESTING } from "../../constants";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import {
    contentDetailsSuccess,
    contentDetailsError,
} from "./actions";

//contentDetails API call
function contentDetailsCall(payload) {
    return request('post', urls.contentDetails_URL, payload);
}

// contentDetails Worker
function* contentDetailsWorker({ payload }) {
    try {
        let response = yield call(contentDetailsCall, payload);
        response = response.data;
        yield put(contentDetailsSuccess());
        // yield call(browserRedirect, '/');
    } catch (err) {
        yield put(contentDetailsError(err.response.data));
    }
}

// contentDetails Watcher
export default function* contentDetailsSaga() {
    yield all([
        takeLatest(CONTENT_PAGE_DETAILS_REQUESTING, contentDetailsWorker),
    ]);
}