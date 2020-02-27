import styled from 'styled-components/macro'

export const Card = styled.div`
  padding: 0.5rem;
  display: flex;
  width: 100%;

  @media (min-width: 44rem) {
    width: 50%;
  }

  @media (min-width: 67rem) {
    width: 33.3333%;
  }
`

export const Title = styled.h3`
  max-height: 3.1rem;
  white-space: normal;
  display: -webkit-box;
  font-size: 16px;
  color: #414141;
  font-size: 1.125rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  min-height: 100%;
  border-radius: 0.3rem;
  position: relative;
  background-color: #ffffff;
  color: #414141;
  transition: box-shadow 0.2s;
  width: 100%;
`

export const ItemInfo = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  overflow: hidden;
  width: auto;
`

export const Meta = styled.div`
  flex: 1;
`

export const Location = styled.div`
  font-size: 0.875rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  overflow: visible;
  white-space: normal;
  line-height: 1.5rem;
`

export const CTAWrapper = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid #e5e5e5;
  display: flex;
  align-content: center;
  justify-content: center;
`

export const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.3rem 0.3rem 0 0;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
`

export const Button = styled.button`
  padding: 1em 2em;
  text-align: center;
  appearance: none;
  border: none;
  background-color: #6996b2;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  &:hover {
    background-color: #49697c;
  }
`
