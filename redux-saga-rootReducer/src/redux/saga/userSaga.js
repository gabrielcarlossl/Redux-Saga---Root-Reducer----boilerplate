import { call, put, takeEvery } from 'redux-saga/effects'
import * as services from '../services/userServices'

function * fetchUsers() {
  try {
    const users = yield call(services.getApiData)
    yield put({ type: 'GET_USERS_SUCCESS', users: users })
  } catch (error) {
    yield put({ type: 'GET_USERS_FAILED', message: error.message })
  }
}

function * userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default userSaga
