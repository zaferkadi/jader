import { call, put, takeLatest, cancelled } from 'redux-saga/effects'
import { IOffersGetRequest, ActionType } from './types'
import { getOffers } from './API'
import { actions as offersActions } from './ducks'

export function* getOffersAsync(action: IOffersGetRequest) {
  const abortController = new AbortController()

  const { query } = action.payload
  try {
    const response = yield call(getOffers, query, abortController.signal)

    const { results, error } = response

    if (error) {
      yield put(offersActions.getOffersFailed())
    } else {
      yield put(
        offersActions.getOffersSuccess(results.offers, results.metaData)
      )
    }
  } catch (e) {
    yield put(offersActions.getOffersFailed())
  } finally {
    if (yield cancelled()) {
      abortController.abort()
    }
  }
}

export default function*() {
  yield takeLatest(ActionType.OFFERS_GET_REQUEST, getOffersAsync)
}
