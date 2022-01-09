import { put, all, call, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUESTING } from "../../constants";
// import { request } from '../../helpers/requests';
// import { urls } from '../../helpers/urls';
import {
    loginSuccess,
    loginError,
} from "./actions";

//Login API call
function loginCall(payload) {
    if (payload.email == 'sawantkunal60@gmail.com') {
        const data = payload;
        data.successful = true;
        return data;
    }
    throw 'please enter valid email Or password';
    // return request('post', urls.LOGIN_URL, payload);
}

// LOGIN Worker
function* loginWorker({ payload }) {
    try {
        let response = yield call(loginCall, payload);
        // response = response;
        localStorage.removeItem('user');
        localStorage.setItem('user', response);
        yield put(loginSuccess());
        // yield   ('/');
    } catch (err) {
        yield put(loginError(err));
    }
}

// Login Watcher
export default function* loginSaga() {
    yield all([
        takeLatest(LOGIN_REQUESTING, loginWorker),
    ]);
}