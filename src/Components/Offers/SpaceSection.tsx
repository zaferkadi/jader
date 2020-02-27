import React from 'react'
import { Space } from './SpaceSection.styled'
import { IDetails } from '../../State/Offers/offer.type'

const SpaceSection = ({ details }: { details: IDetails }): JSX.Element => {
  return (
    <Space>
      {details.guestsCount} adults, {details.bedroomsCount} bedrooms,{' '}
      {details.shortName.join(', ')}
    </Space>
  )
}

export default SpaceSection
