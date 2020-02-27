import React from 'react'

import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton
} from './Carousel.styled'
import { carouselReducer, initialState, actions } from './ducks'

const getOrder = ({
  index,
  pos,
  numItems
}: {
  index: number
  pos: number
  numItems: number
}) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos
}

const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const [state, dispatch] = React.useReducer(carouselReducer, initialState)
  const numItems = React.Children.count(children)
  const nextSlide = () => {
    dispatch(actions.nextSlide(numItems))
  }
  const prevSlide = () => {
    dispatch(actions.prevSlide(numItems))
  }

  return (
    <div>
      <Wrapper>
        <CarouselContainer direction={state.dir}>
          {React.Children.map(children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButton direction="left" onClick={() => prevSlide()}>
        {'<'}
      </SlideButton>
      <SlideButton direction="right" onClick={() => nextSlide()}>
        {'>'}
      </SlideButton>
    </div>
  )
}

export default Carousel
