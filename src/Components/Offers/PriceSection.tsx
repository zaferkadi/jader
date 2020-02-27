import React from 'react'
import { Price, PricePrefix, PricePer } from './PriceSection.styled'
import { useCurrencyFormatter } from '../../CustomHooks/numberFormatter'
import { IPrice } from '../../State/Offers/offer.type'

const PriceSection = ({ price }: { price: IPrice }) => {
  const format = useCurrencyFormatter(price.currency)
  return (
    <Price>
      <PricePrefix>from</PricePrefix>
      {format(price.daily)}
      <PricePer>per night</PricePer>
    </Price>
  )
}

export default PriceSection
