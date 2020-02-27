import { Action } from 'redux'

export enum ActionType {
  NEXT = 'NEXT',
  PREV = 'PREV'
}

interface INextSlide extends Action {
  type: ActionType.NEXT
  payload: {
    slides: number
  }
}

interface IPrevSlide extends Action {
  type: ActionType.PREV
  payload: {
    slides: number
  }
}

export type CarouselActionTypes = INextSlide | IPrevSlide

export interface ICarouselState {
  readonly pos: number
  readonly dir: ActionType.NEXT | ActionType.PREV
}
