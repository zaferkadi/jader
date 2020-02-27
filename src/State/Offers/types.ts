import { AsyncStatusTypes } from '../common.types'
import { Action } from 'redux'
import { IOffer } from './offer.type'
import { IMetaData } from './meta.type'

export enum ActionType {
  OFFERS_GET_REQUEST = 'OFFERS_GET_REQUEST',
  OFFERS_GET_SUCCESS = 'OFFERS_GET_SUCCESS',
  OFFERS_GET_FAILED = 'OFFERS_GET_FAILED'
}

export interface IOffersState {
  readonly asyncStatus:
    | AsyncStatusTypes.ERROR
    | AsyncStatusTypes.LOADING
    | AsyncStatusTypes.SUCCESS
  readonly offers: IOffer[]
  readonly query: string
  readonly metaData: IMetaData
}

export interface IOffersGetSuccess extends Action {
  type: ActionType.OFFERS_GET_SUCCESS
  payload: {
    offers: IOffer[]
    metaData: IMetaData
  }
}

export interface IOffersGetFailed extends Action {
  type: ActionType.OFFERS_GET_FAILED
}

export interface IOffersGetRequest extends Action {
  type: ActionType.OFFERS_GET_REQUEST
  payload: {
    query: string
  }
}

export type OffersActionTypes =
  | IOffersGetFailed
  | IOffersGetRequest
  | IOffersGetSuccess
