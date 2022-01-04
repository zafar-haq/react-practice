import { all } from "redux-saga/effects";
import instructorClassSaga from "./instructorClassSaga";

function* rootSaga() {
    yield all([
        instructorClassSaga(),
    ])
}

export default rootSaga