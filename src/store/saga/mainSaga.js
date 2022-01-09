import { all } from "redux-saga/effects";
import loginSaga from "../../modules/Login/saga";
import userSaga from "../../modules/User/saga";

export function* mainSaga() {
    yield all([
        loginSaga(),
        userSaga()
    ]);
}