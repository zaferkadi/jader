import styled, { css } from 'styled-components/macro'

export const Review = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;
`

export const Stars = styled.span`
  color: coral;
  font-weight: bold;
  font-size: 0.875rem;
  margin-right: 0.2rem;
`

export const Reviewers = styled.span`
  color: #7b7b7b;
  font-size: 0.875rem;
`

export const Rating = styled.div(
  ({
    size = 14,
    forColor = 'coral',
    backColor = '#ccc',
    rating
  }: {
    size?: number
    forColor?: string
    backColor?: string
    rating: number
  }) => css`
    display: inline-block;
    font-size: ${size}px;
    line-height: 1;

    &::before {
      content: '★★★★★';
      letter-spacing: 3px;
      background: linear-gradient(
        90deg,
        ${forColor} ${rating}%,
        ${backColor} ${rating}%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
)
