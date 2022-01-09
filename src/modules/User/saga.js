import { put, all, call, takeLatest } from "redux-saga/effects";
import { requestDetails } from '../../helpers/client.interceptor';
import { urls } from '../../helpers/urls';
import { userSuccess, userError} from "./actions";
import { USER_REQUESTING  } from "../../constants.js";

//user API call
function userCall() {
  return requestDetails('get', urls.USER_URL);
}

// user Worker
function* userWorker() {
  try {
    let response = yield call(userCall);
    response = response.data;
    yield put(userSuccess(response));
    // yield call(browserRedirect, '/');
  } catch (err) {
    yield put(userError(err));
  }
}

// user Watcher
export default function* userSaga() {
  yield all([
    takeLatest(USER_REQUESTING, userWorker),
  ]);
}