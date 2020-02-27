import offersSagas from './Offers/saga'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(offersSagas)
}
