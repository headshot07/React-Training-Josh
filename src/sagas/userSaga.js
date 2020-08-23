import { LOGIN_REDUCER } from "../shared/actionConstants";
import { takeLatest, call, put } from "redux-saga/effects";
import { setUserDetails, loginFailed } from "../actions/loginActions";
import login from "../apis/loginApi";

//Worker Saga
function* loginSaga(action) {
  try {
    const { data } = yield call(login, action.value);
    yield put(setUserDetails(data));
  } catch (error) {
    console.log(error);
    yield put(loginFailed(error));
  }
}

//Watcher Saga
export default function* userSaga() {
  yield takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginSaga);
}
