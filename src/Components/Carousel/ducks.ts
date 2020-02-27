import { ICarouselState, ActionType, CarouselActionTypes } from './types'

export const initialState: ICarouselState = { pos: 0, dir: ActionType.NEXT }

export function carouselReducer(
  state = initialState,
  action: CarouselActionTypes
): ICarouselState {
  switch (action.type) {
    case ActionType.PREV:
      return {
        dir: ActionType.PREV,
        pos: state.pos === action.payload.slides - 1 ? 0 : state.pos + 1
      }
    case ActionType.NEXT:
      return {
        dir: ActionType.NEXT,
        pos: state.pos === 0 ? action.payload.slides - 1 : state.pos - 1
      }
    default:
      return state
  }
}

export const actions = {
  nextSlide: (slides: number): CarouselActionTypes => ({
    type: ActionType.NEXT,
    payload: {
      slides: slides
    }
  }),
  prevSlide: (slides: number): CarouselActionTypes => ({
    type: ActionType.PREV,
    payload: {
      slides: slides
    }
  })
}
