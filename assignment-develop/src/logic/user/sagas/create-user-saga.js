import { call, put, takeLatest } from 'redux-saga/effects'
import { UserApi } from '../api/user-api'
import { createUserSuccess, createUserFailure, createUserRequest } from '../ducks/create-user-slice'

function* createUser(action){
  try{
    const response = yield call(UserApi.createUser, action.payload)
    yield put(createUserSuccess(response))
  }catch(error){
    yield put(createUserFailure(error.response?.data || error.message))
  }
}

const watchCreateUserSaga = function* watchCreateUserSaga() {
  yield takeLatest(createUserRequest.type, createUser)
}

export default watchCreateUserSaga
