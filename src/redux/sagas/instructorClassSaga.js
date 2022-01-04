import { take, call, put } from "redux-saga/effects";
import axiosService from "../../services/axiosService";
import { setClass } from '../actions/classActions'

const getClassApi = async () => {
    const response = await axiosService.send('instructor/getClass', '', '', 'get');
    return response
}

function* getClass() {
    const response = yield call(getClassApi)
    yield put(setClass(response.data.data))
}

function* instructorClassSaga() {
    yield take('GET_CLASS_REQUEST')
    yield call(getClass)
}

export default instructorClassSaga