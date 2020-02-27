import { IOffersState, OffersActionTypes, ActionType } from './types'
import { AsyncStatusTypes } from '../common.types'
import { IOffer } from './offer.type'
import { IMetaData } from './meta.type'

const initialState: IOffersState = {
  asyncStatus: AsyncStatusTypes.LOADING,
  query: '',
  offers: [],
  metaData: {}
}

export default function offersReducer(
  state = initialState,
  action: OffersActionTypes
): IOffersState {
  switch (action.type) {
    case ActionType.OFFERS_GET_REQUEST:
      return {
        ...state,
        asyncStatus: AsyncStatusTypes.LOADING
      }
    case ActionType.OFFERS_GET_FAILED:
      return {
        ...state,
        asyncStatus: AsyncStatusTypes.ERROR
      }
    case ActionType.OFFERS_GET_SUCCESS:
      return {
        ...state,
        asyncStatus: AsyncStatusTypes.SUCCESS,
        offers: action.payload.offers,
        metaData: action.payload.metaData
      }
    default:
      return state
  }
}

export const actions = {
  getOffersRequest: (query: string): OffersActionTypes => ({
    type: ActionType.OFFERS_GET_REQUEST,
    payload: {
      query
    }
  }),
  getOffersSuccess: (
    offers: IOffer[],
    metaData: IMetaData
  ): OffersActionTypes => ({
    type: ActionType.OFFERS_GET_SUCCESS,
    payload: {
      offers,
      metaData
    }
  }),
  getOffersFailed: (): OffersActionTypes => ({
    type: ActionType.OFFERS_GET_FAILED
  })
}
