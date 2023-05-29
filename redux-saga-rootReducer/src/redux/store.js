import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

// the store it's filled with all reducers
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer)
sagaMiddleware.run(rootSaga)

export default store
