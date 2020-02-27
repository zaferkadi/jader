import { combineReducers } from 'redux'
import offersReducer from './Offers/ducks'
import { OffersActionTypes } from './Offers/types'

export const rootReducer = combineReducers({ offersReducer: offersReducer })

export type IAppState = ReturnType<typeof rootReducer>

export type IAppActions = OffersActionTypes
