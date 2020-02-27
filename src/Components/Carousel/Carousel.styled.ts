import styled, { css } from 'styled-components/macro'
import { ActionType } from './types'

interface CarouselImageProps {
  img: string
}

export const CarouselImage = styled.div.attrs<CarouselImageProps>(
  ({ img }) => ({
    style: { backgroundImage: `url(${img})` }
  })
)<CarouselImageProps>`
  text-align: center;
  padding: 100px;
  background-size: cover;
`

export const CarouselContainer = styled.div(
  ({ direction }: { direction: ActionType }) => {
    return css`
      display: flex;
      transform: ${direction === ActionType.PREV
        ? 'translateX(calc(2 * (-100% )))'
        : 'translateX(-100%)'};
    `
  }
)

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

export const CarouselSlot = styled.div(
  ({ order }: { order: number }) => css`
    flex: 1 0 100%;
    flex-basis: 100%;
    order: ${order};
  `
)

export const SlideButton = styled.button(
  ({ direction }: { direction: string }) => css`
    position: absolute;
    top: 0;
    appearance: none;
    border: 0;
    height: 100%;
    ${direction === 'left' ? 'left: 0' : 'right:0'};
    background-color: rgba(0, 0, 0, 0.3);
    font-weight: 700;
    cursor: pointer;
    font-size: 18px;
  `
)
