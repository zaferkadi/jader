import React, { Dispatch } from 'react'
import { IAppState, IAppActions } from '../State/rootReducer'
import { actions as offersActions } from '../State/Offers/ducks'
import { useDispatch, useSelector } from 'react-redux'
import Offer from '../Components/Offers/Offer'
import {
  OffersList,
  Searchbox,
  Header,
  MetaContainer,
  SubHeading,
  Heading,
  ResultsContainer
} from './Offers.styled'
import { AsyncStatusTypes } from '../State/common.types'
import BarLoader from '../Components/BarLoader'
import { useNumberFormatter } from '../CustomHooks/numberFormatter'

const Offers = (): JSX.Element => {
  const format = useNumberFormatter()

  const dispatch: Dispatch<IAppActions> = useDispatch()
  const [query, changeQuery] = React.useState('Mallorca')

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeQuery(e.target.value)
  }

  React.useEffect(() => {
    dispatch(offersActions.getOffersRequest(query))
  }, [dispatch, query])

  const { offers, metaData, asyncStatus } = useSelector(
    (state: IAppState) => state.offersReducer
  )

  return (
    <>
      <Header>
        <Searchbox onChange={onInput} value={query} />
      </Header>
      {asyncStatus === AsyncStatusTypes.LOADING && <BarLoader />}
      {asyncStatus === AsyncStatusTypes.ERROR && 'API CALL FAILED'}
      {asyncStatus === AsyncStatusTypes.SUCCESS && (
        <ResultsContainer>
          <MetaContainer>
            <Heading>
              {metaData.searchRegion?.name
                ? metaData.searchRegion?.name + ': '
                : null}
              {metaData.cursor?.totalCount
                ? ` ${format(metaData.cursor?.totalCount)} `
                : null}
            </Heading>
            <SubHeading>{metaData.listTitle}</SubHeading>
          </MetaContainer>
          <OffersList>
            {offers.map(offer => (
              <Offer offer={offer} key={offer.id} />
            ))}
          </OffersList>
        </ResultsContainer>
      )}
    </>
  )
}

export default Offers
