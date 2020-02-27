import styled from 'styled-components/macro'

export const ResultsContainer = styled.div`
  margin: 0 auto;
  max-width: 75rem;
`

export const OffersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 41.5rem) {
    width: 100%;
    min-width: auto;
  }
  @media (min-width: 64rem) {
    width: 100%;
    min-width: auto;
  }
  @media (min-width: 87rem) {
    width: 100%;
    min-width: auto;
  }
`

export const Searchbox = styled.input`
  width: 250px;
  height: 40px;
  font-size: 20px;
  appearance: none;
  border: none;
  padding: 0.5rem;
`

export const Header = styled.header`
  background-color: #211c1e;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`

export const MetaContainer = styled.div`
  padding: 0.5rem;
`

export const Heading = styled.span`
  font-size: 18px;
  font-weight: bold;
`
export const SubHeading = styled.span`
  font-size: 16px;
`
