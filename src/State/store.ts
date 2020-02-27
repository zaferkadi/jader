import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, IAppState, IAppActions } from './rootReducer'
import rootSaga from './rootSaga'
import { createLogger } from 'redux-logger'

export const configureStore = (
  initialState = {}
): Store<IAppState, IAppActions> => {
  const sagaMiddleware = createSagaMiddleware()
  const isDev = process.env.NODE_ENV !== 'production'
  let middlewares: Middleware[] = [sagaMiddleware]
  if (isDev) {
    middlewares.push(createLogger({ collapsed: true }))
  }
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)
  return store
}
