import { all } from 'redux-saga/effects'
import userSaga from './userSaga'

//Adicionar dentro do array all todos os sagas que forem criados
export default function * rootSaga() {
  yield all([userSaga()])
}
