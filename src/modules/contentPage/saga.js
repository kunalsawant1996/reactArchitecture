import { put, all, call, takeLatest } from "redux-saga/effects";
import { CONTENT_PAGE_REQUESTING } from "../../constants";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import {
    contentPageSuccess,
    contentPageError,
} from "./actions";

//contentPage API call
function contentPageCall(payload) {
    return request('post', urls.contentPage_URL, payload);
}

// contentPage Worker
function* contentPageWorker({ payload }) {
    try {
        let response = yield call(contentPageCall, payload);
        response = response.data;
        yield put(contentPageSuccess());
        // yield call(browserRedirect, '/');
    } catch (err) {
        yield put(contentPageError(err.response.data));
    }
}

// contentPage Watcher
export default function* contentPageSaga() {
    yield all([
        takeLatest(CONTENT_PAGE_REQUESTING, contentPageWorker),
    ]);
}